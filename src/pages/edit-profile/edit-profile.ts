import { Block } from "../../ts/modules/Block/Block";

import { editProfilePageTemplate } from "./edit-profile.template";
import { TEditProfilePage } from "./types";

import { formSubmit } from "../../ts/components/form-submit";

export class EditProfilePage extends Block<TEditProfilePage> {
    constructor(tagName = "main", props: TEditProfilePage) {
        super(tagName, props);
    }

    render(): DocumentFragment {
        return this._compile(editProfilePageTemplate, this.props);
    }

    protected _addEventListeners(): void {
        this._element.querySelector('form')?.addEventListener('submit', formSubmit);

        super._addEventListeners();
    }
}
