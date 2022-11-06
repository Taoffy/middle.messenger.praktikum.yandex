import { Block } from "../../ts/modules/Block/Block";

import "./chats.css";

import { chatsPageTemplate } from "./chats.template";
import { TChatsPage } from "./types";

export class ChatsPage extends Block<TChatsPage> {
    constructor(tagName = "main", props: TChatsPage) {
        super(tagName, props);
    }

    render(): DocumentFragment {
        return this._compile(chatsPageTemplate, this.props);
    }
}
