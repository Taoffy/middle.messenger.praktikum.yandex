import { Block } from "../../ts/modules/Block/Block";

import { inputTemplate } from "./input.template";
import { TInput } from "./types";

import "./input.css";

export class Input extends Block<TInput> {
    constructor(tagName = "div", props: TInput) {
        super(tagName, props);
    }

    render(): DocumentFragment {
        return this._compile(inputTemplate, this.props);
    }
}
