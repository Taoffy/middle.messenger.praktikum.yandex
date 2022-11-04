import Handlebars from "handlebars";
import { v4 as makeUUID } from "uuid";

import EventBus from "../EventBus/EventBus";

import { EVENTS, TObjectEvents, TRecordProps } from "./types";

abstract class Block<TProps extends object> {
    protected _element: HTMLElement;
    protected _meta: { tagName: string; props: unknown };
    protected eventBus: () => EventBus;
    protected _children: {[N: string]: Block<TProps>};
    protected _id: string | null;
    public props: TProps;


    /** JSDoc
     * @param {string} tagName
     * @param {TProps} rawProps
     *
     * @returns {void}
     */
    constructor(tagName = "div", rawProps: TRecordProps<unknown>) {
        const eventBus = new EventBus();
        const { props, children } = this._getChildren(rawProps);
        const requireId = (props.settings as {[N: string]: boolean})?.witnInternalID;

        this._meta = {
          tagName,
          props
        };

        
        this._id = requireId ? makeUUID() : null;
        this._children = this._makePropsProxy(children) as {[N: string]: Block<TProps>};
        this.props = this._makePropsProxy({...props, _id: this._id}) as TProps;

        this.eventBus = () => eventBus;

        this._makePropsProxy = this._makePropsProxy.bind(this);
        this._registerEvents(eventBus);
        eventBus.emit(EVENTS.INIT);
    }

    protected _registerEvents(eventBus: EventBus) {
        eventBus.on(EVENTS.INIT, this.init.bind(this));
        eventBus.on(EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    protected _createResources() {
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
    }

    init() {
        this._createResources();

        this.eventBus().emit(EVENTS.FLOW_RENDER);
    }

    protected _componentDidMount() {
        this.componentDidMount();
        Object.values(this._children).forEach(child => { 
            child.componentDidMount(); 
        });
    }

    public componentDidMount() {}

    public dispatchComponentDidMount() {
        this.eventBus().emit(EVENTS.FLOW_CDM);
    }

    protected _componentDidUpdate(oldProps: TProps, newProps: TProps) {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (!response) {
          return;
        }
        this._render();
    }

    public componentDidUpdate(oldProps: TProps, newProps: TProps) {
        return true;
    }

    public setProps = (nextProps: TProps) => {
        if (!nextProps) {
          return;
        }

        Object.assign(this.props, nextProps);
    };

    get element() {
        return this._element;
    }

    protected _compile<T>(template: string, props : TRecordProps<T>) {
        if (typeof props === undefined) {
            props = this.props as TRecordProps<T>;
        }

        const compileProps = {...props};

        Object.entries(this._children).forEach(([key, value]) => {
            (compileProps[key] as unknown) = `<div data-id="${value._id}"></div>`
        });

        const fragment = this._createDocumentElement('template');
        fragment.innerHTML = Handlebars.compile(template)(compileProps);

        Object.values(this._children).forEach(child => {    
            const element = fragment.content.querySelector(`[data-id="${child._id}"]`);
            if (Array.isArray(child)) {
                child.forEach((item, index) => {
                    if (index < child.length - 1) {
                        element?.before(item.getContent());
                    } else {
                        element?.replaceWith(item.getContent());
                    }
                });
            } else {
                element?.replaceWith(child.getContent());
            }
        });

        return fragment.content;
    }

    protected _makePropsProxy<T>(props: TRecordProps<T>) {

        return new Proxy(props, {
            get: (target, prop: string) => {
                const value = target[prop];
                return typeof value === "function" ? value.bind(target) : value;
            },
            set: (target, prop: string, value): boolean => {
                const oldProps = {...target}
                target[prop] = value;
              
                // Запускаем обновление компоненты
                // Плохой cloneDeep, в следующей итерации нужно заставлять добавлять cloneDeep им самим
                this.eventBus().emit(EVENTS.FLOW_CDU, oldProps, target);
                return true;
            },
            deleteProperty() {
                throw new Error("Нет доступа");
            }
        });
    }

    protected _createDocumentElement(tagName: string): HTMLTemplateElement {
        return document.createElement(tagName) as HTMLTemplateElement;
    }

    protected _addEventListeners() {
        const { events } = this.props as TObjectEvents;

        if (events) {
            Object.keys(events).forEach((eventName: string) => {
                this._element.addEventListener(eventName, events[eventName as keyof typeof events]);
            });
        }
    }

    protected _removeEventListeners() {
        const { events } = this.props as TObjectEvents;

        if (events) {
            Object.keys(events).forEach((eventName: string) => {
                this._element.removeEventListener(eventName, events[eventName as keyof typeof events]);
            });
        }
    }

    protected _setAttributes() {
        const { attributes = {} } = this.props as {[N: string]: {[N: string]: string}};

        if (attributes) {
            Object.entries(attributes).forEach(([key, value]) => {
                this._element.setAttribute(key, value);
            });
        }
    }

    protected _getChildren<T>(propsAndChildren: TRecordProps<T>) {
        const children: TRecordProps<T> = {};
        const props: TRecordProps<T> = {};

        Object.entries(propsAndChildren).forEach(([key, value]) => {
            if (value instanceof Block) {
                children[key] = value;
            } else if (Array.isArray(value)) {
                value.forEach(item => {
                    if (item instanceof Block) {
                        children[key] = value;
                    } else {
                        props[key] = value;
                    }
                })
            } else {
                props[key] = value;
            }
        });

        return { children, props };
    }

    protected _render() {
        const block = this.render();
        this._removeEventListeners();
        this._element.innerHTML = '';
        this._element.appendChild(block);
        this._setAttributes();
        this._addEventListeners();
    }

    abstract render(): DocumentFragment

    getContent() {
        return this.element;
    }

    public show() {
        this.getContent().style.display = "block";
    }

    public hide() {
        this.getContent().style.display = "none";
    }
}

export default Block;
