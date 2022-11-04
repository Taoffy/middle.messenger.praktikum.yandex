import Block from "../../ts/modules/Block/Block";

import signupPageTemplate from "./signup.template";
import { TSignupPage } from "./types";

import formSubmit from "../../ts/components/form-submit";
import inputListener from "../../ts/components/input-listener";

export default class SignupPage extends Block<TSignupPage> {
    constructor(tagName = "main", props: TSignupPage) {
        super(tagName, props);
    }

    render(): DocumentFragment {
        return this._compile(signupPageTemplate, this.props);
    }

    protected _addEventListeners(): void {
        this._element.querySelector('form')?.addEventListener('submit', formSubmit);
        this._element.querySelectorAll('input').forEach(input => { input.addEventListener('blur', inputListener); input.addEventListener('focus', inputListener) });

        super._addEventListeners();
    }
}
