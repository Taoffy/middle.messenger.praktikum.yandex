import Block from "../../ts/modules/Block/Block";

import loginPageTemplate from "./login.template";
import { TLoginPage } from "./types";

import formSubmit from "../../ts/components/form-submit";
import inputListener from "../../ts/components/input-listener";

export default class LoginPage extends Block<TLoginPage> {
    constructor(tagName = "main", props: TLoginPage) {
        super(tagName, props);
    }

    render(): DocumentFragment {
        return this._compile(loginPageTemplate, this.props);
    }

    protected _addEventListeners(): void {
        this._element.querySelector('form')?.addEventListener('submit', formSubmit);
        this._element.querySelectorAll('input').forEach(input => { input.addEventListener('blur', inputListener); input.addEventListener('focus', inputListener) });

        super._addEventListeners();
    }
}
