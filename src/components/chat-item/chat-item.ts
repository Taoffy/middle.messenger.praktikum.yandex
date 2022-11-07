import { Block } from "../../ts/modules/Block/Block";

import { chatItemTemplate } from "./chat-item.template";
import { TChatItem } from "./types";

export class ChatItem extends Block<TChatItem> {
    constructor(tagName = "li", props: TChatItem) {
        super(tagName, props)
    }

    render(): DocumentFragment {
        return this._compile(chatItemTemplate, this.props);
    }
}
