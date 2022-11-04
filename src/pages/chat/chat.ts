import Block from "../../ts/modules/Block/Block";

import chatPageTemplate from "./chat.template";
import { TChatPage } from "./types";

import formSubmit from "../../ts/components/form-submit";
import inputListener from "../../ts/components/input-listener";

export default class ChatPage extends Block<TChatPage> {
    constructor(tagName = "main", props: TChatPage) {
        super(tagName, props);
    }

    render(): DocumentFragment {
        return this._compile(chatPageTemplate, this.props);
    }

    protected _addEventListeners(): void {
        this._element.querySelector('form')?.addEventListener('submit', formSubmit);
        this._element.querySelectorAll('input').forEach(input => { input.addEventListener('blur', inputListener); input.addEventListener('focus', inputListener) });

        super._addEventListeners();
    }
}
