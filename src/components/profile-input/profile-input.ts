import Block from "../../ts/modules/Block/Block";

import profileInputTemplate from "./profile-input.template";
import { TProfileInput } from "./types";

export default class ProfileInput extends Block<TProfileInput> {
    constructor(tagName = "div", props: TProfileInput) {
        super(tagName, props);
    }

    render(): DocumentFragment {
        return this._compile(profileInputTemplate, this.props);
    }
}
