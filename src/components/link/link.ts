import Block from "../../ts/modules/Block/Block";

import linkTemplate from "./link.template";
import { TLink } from "./types";

export default class Link extends Block<TLink> {
    constructor(tagName = "a", props: TLink) {
        super(tagName, props);
    }

    render(): DocumentFragment {
        return this._compile(linkTemplate, this.props);
    }
}
