import { Block } from "../../ts/modules/Block/Block";

import { TAvatarInput } from "./types";
import { avatarInputTemplate } from "./avatar-input.template";

import "./avatar-input.css";

export class AvatarInput extends Block<TAvatarInput> {
    constructor(tagName = "label", props: TAvatarInput) {
        super(tagName, props);
    }

    public render(): DocumentFragment {
        return this._compile(avatarInputTemplate, this.props);
    }
}
