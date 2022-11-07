import { Block } from "../../ts/modules/Block/Block";

import { formTemplate } from "./form.template";
import { TForm } from "./types";

export class Form extends Block<TForm> {
    constructor(tagName = "form", props: TForm) {
        super(tagName, props);
    }

    render(): DocumentFragment {
        return this._compile(formTemplate, this.props);
    }
}
