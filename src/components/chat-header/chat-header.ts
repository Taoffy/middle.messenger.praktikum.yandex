import Block from "../../ts/modules/Block/Block";

import headerTemplate from "./chat-header.template";
import { TChatHeader } from "./types";

export default class ChatHeader extends Block<TChatHeader> {
    constructor(tagName = 'div', props: TChatHeader) {
        super(tagName, props);
    }

    render(): DocumentFragment {
        return this._compile(headerTemplate, this.props);
    }
}
