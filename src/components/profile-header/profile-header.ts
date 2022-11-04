import Block from "../../ts/modules/Block/Block";

import profileHeaderTemplate from "./profile-header.template";
import { TProfileHeader } from "./types";

export default class ProfileHeader extends Block<TProfileHeader> {
    constructor(tagName = "header", props: TProfileHeader) {
        super(tagName, props);
    }

    render(): DocumentFragment {
        return this._compile(profileHeaderTemplate, this.props);
    }
}
