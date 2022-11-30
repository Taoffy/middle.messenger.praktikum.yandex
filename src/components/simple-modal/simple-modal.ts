import { Block } from "../../ts/modules/Block/Block";

import { TSimpleModal } from "./types";
import { simpleModalTemplate } from "./simple-modal.template";

import "./simple-modal.css";

export class SimpleModal extends Block<TSimpleModal> {
    constructor(tagName = "div", props: TSimpleModal) {
        super(tagName, props);
    }

    public render(): DocumentFragment {
        return this._compile(simpleModalTemplate, this.props);
    }
}
