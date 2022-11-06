import { Block } from "../../ts/modules/Block/Block";

import { profilePageTemplate } from "./profile.template";
import { TProfilePage } from "./types";

export class ProfilePage extends Block<TProfilePage> {
    constructor(tagName = "main", props: TProfilePage) {
        super(tagName, props);
    }

    render(): DocumentFragment {
        return this._compile(profilePageTemplate, this.props);
    }
}
