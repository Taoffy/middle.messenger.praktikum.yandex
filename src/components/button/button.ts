import Block from "../../ts/modules/Block/Block";

import buttonTemplate from "./button.template";
import { TButton } from "./types";

export default class Button extends Block<TButton> {
    constructor(tagName = "button", props: TButton) {
        super(tagName, props);
    }

    render(): DocumentFragment {
        return this._compile(buttonTemplate, this.props);
    }
}
