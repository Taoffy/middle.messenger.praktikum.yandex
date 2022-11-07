import { Block } from "../../ts/modules/Block/Block";

import "./chat.css";

import { chatPageTemplate } from "./chat.template";
import { TChatPage } from "./types";
export class ChatPage extends Block<TChatPage> {
    constructor(tagName = "main", props: TChatPage) {
        super(tagName, props);
    }

    render(): DocumentFragment {
        return this._compile(chatPageTemplate, this.props);
    }
}
