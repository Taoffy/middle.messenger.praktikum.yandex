import Block from "../../ts/modules/Block/Block";

import template404 from "./404.template";
import { TPage404 } from "./types";

export default class Page404 extends Block<TPage404> {
    constructor(tagName = "div", props: TPage404) {
        super(tagName, props);
    }

    render(): DocumentFragment {
        return this._compile(template404, this.props);
    }
}
