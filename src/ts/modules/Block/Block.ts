import Handlebars from "handlebars";
import { v4 as makeUUID } from "uuid";
import { Indexed } from "../../../types/common-types";
import { isEqual } from "../../utils/is-equal";

import { EventBus } from "../EventBus/EventBus";

import { EVENTS, BUBLING_EVENTS, TObjectEvents, TRecordProps } from "./types";

class Block<TProps extends object> {
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
    constructor(tagName = "div", rawProps: TRecordProps<unknown> = {}) {
        const eventBus = new EventBus();
        const { props, children } = this._getChildren(rawProps);
        const requireId = (props.settings as {[N: string]: boolean})?.witnInternalID;

        this._meta = {
          tagName,
          props
        };
        
        this._element =  document.createElement('div');
        this._id = requireId ? makeUUID() : null;
        this._children = this._makePropsProxy(children, true) as {[N: string]: Block<TProps>};
        this.props = this._makePropsProxy({...props, _id: this._id}, false) as TProps;

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
        Object.values(this._children).forEach(child => {
          if (Array.isArray(child)) {
              child.forEach((item) => {
                  item.dispatchComponentDidMount();
              });
          } else {
              child.dispatchComponentDidMount(); 
          }
            
        });

        this.componentDidMount();
    }

    public componentDidMount(): void {}

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
        if (isEqual(oldProps, newProps)) {
            return false;
        }

        return true;
    }

    public setProps<T>(nextProps: TRecordProps<T>) {
        if (!nextProps) {
          return;
        }

        const { props, children } = this._getChildren(nextProps);

        if (Object.values(props).length) {
            Object.assign(this.props, nextProps);
        }

        if (Object.values(children).length) {
            Object.assign(this._children, children);
        }
    }

    get element() {
        return this._element;
    }

    protected _compile(template: string, props : Indexed) {
        if (typeof props === undefined) {
            props = this.props;
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

    protected _makePropsProxy<T>(props: TRecordProps<T>, isChildren: boolean) {
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
            deleteProperty(target, prop) {
                if (!isChildren) {
                    throw new Error("Нет доступа");
                } else {
                    delete target[prop as string];
                    return true;
                }
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
                this._element.addEventListener(eventName, events[eventName as keyof typeof events], Object.values(BUBLING_EVENTS).includes(eventName as unknown as BUBLING_EVENTS) ? true : false);
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
            if (this._children && this._children[key] && value === undefined) {
                delete this._children[key];
                return;
            }
            
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

    //@ts-ignore
    public render(): DocumentFragment {}

    getContent() {
        return this.element;
    }

    public show() {
        this.getContent().style.display = "flex";
    }

    public hide() {
        this.getContent().style.display = "none";
    }
}

export { Block };
