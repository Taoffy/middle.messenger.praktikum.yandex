import { Block } from "../../ts/modules/Block/Block";

import { modalTemplate } from "./modal.template";
import { TModal } from "./types";

import "./modal.css";

export class Modal extends Block<TModal> {
    constructor(tagName = "div", props: TModal) {
        super(tagName, props);
    }

    public render(): DocumentFragment {
        return this._compile(modalTemplate, this.props);
    }
}
