import { Block } from "../../Block/Block";

import { render } from "../../../render";

import { TProps } from "./routeTypes";
import { Indexed } from "../../../../types/common-types";

export class Route<T extends typeof Block> {
    protected _pathname: string;
    protected _block: Block<Indexed>|null;
    protected _blockClass: T;
    protected _props: TProps;

    constructor(pathname: string, view: T, props: TProps) {
        this._pathname = pathname;
        this._block = null;
        this._blockClass = view;
        this._props = props;
    }

    public navigate(pathname: string) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    public leave() {
        if (this._block) {
            this._block.hide();
        }
    }

    public match(pathname: string) {
        return pathname === this._pathname;
    }

    public render() {
        this._block = new this._blockClass(undefined, undefined);
        render(this._props.rootQuery, this._block);
    }
}
