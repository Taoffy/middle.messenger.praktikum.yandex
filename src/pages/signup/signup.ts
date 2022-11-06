import { Block } from "../../ts/modules/Block/Block";

import "./signup.css";

import { signupPageTemplate } from "./signup.template";
import { TSignupPage } from "./types";
export class SignupPage extends Block<TSignupPage> {
    constructor(tagName = "main", props: TSignupPage) {
        super(tagName, props);
    }

    render(): DocumentFragment {
        return this._compile(signupPageTemplate, this.props);
    }
}
