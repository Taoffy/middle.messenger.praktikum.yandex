import { Block } from "../../ts/modules/Block/Block";

import { loginPageTemplate } from "./login.template";
import { TLoginPage } from "./types";

export class LoginPage extends Block<TLoginPage> {
    constructor(tagName = "main", props: TLoginPage) {
        super(tagName, props);
    }

    render(): DocumentFragment {
        return this._compile(loginPageTemplate, this.props);
    }
}
