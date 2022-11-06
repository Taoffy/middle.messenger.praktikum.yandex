import { Block } from "../../ts/modules/Block/Block";

import { signupPageTemplate } from "./signup.template";
import { TSignupPage } from "./types";

import { formSubmit } from "../../ts/components/form-submit";

export class SignupPage extends Block<TSignupPage> {
    constructor(tagName = "main", props: TSignupPage) {
        super(tagName, props);
    }

    render(): DocumentFragment {
        return this._compile(signupPageTemplate, this.props);
    }

    protected _addEventListeners(): void {
        this._element.querySelector('form')?.addEventListener('submit', formSubmit);

        super._addEventListeners();
    }
}
