import { Block } from "../../ts/modules/Block/Block";

import { messageTemplate } from "./message.template";
import { TMessage } from "./types";

import "./message.css";

export class Message extends Block<TMessage> {
    constructor(tagName = "li", props: TMessage) {
        super(tagName, props);
    }

    render(): DocumentFragment {
        return this._compile(messageTemplate, this.props);
    }
}
