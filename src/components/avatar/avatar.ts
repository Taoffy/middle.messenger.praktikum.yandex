import Block from "../../ts/modules/Block/Block";

import avatarTemplate from "./avatar.template";
import { TAvatar } from "./types";

export default class Avatar extends Block<TAvatar> {
    constructor(tagName = 'div', props: TAvatar) {
        super(tagName, props);
    }

    render(): DocumentFragment {
        return this._compile(avatarTemplate, this.props);
    }
}
