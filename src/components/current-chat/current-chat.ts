import { Block } from "../../ts/modules/Block/Block";

import { currentChatTemplate } from "./current-chat.template";
import { TCurrentChat } from "./types";

import "./current-chat.css";

export class CurrentChat extends Block<TCurrentChat> {
    constructor(tagName = "div", props: TCurrentChat) {
        super(tagName, props);
    }

   public render(): DocumentFragment {
       return this._compile(currentChatTemplate, this.props);
   } 
}
