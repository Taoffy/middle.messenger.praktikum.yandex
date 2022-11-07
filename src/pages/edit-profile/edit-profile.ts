import { Block } from "../../ts/modules/Block/Block";

import "./edit-profile.css";

import { editProfilePageTemplate } from "./edit-profile.template";
import { TEditProfilePage } from "./types";

export class EditProfilePage extends Block<TEditProfilePage> {
    constructor(tagName = "main", props: TEditProfilePage) {
        super(tagName, props);
    }

    render(): DocumentFragment {
        return this._compile(editProfilePageTemplate, this.props);
    }
}
