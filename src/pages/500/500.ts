import { Block } from "../../ts/modules/Block/Block";

import { template500 } from "./500.template";
import { TPage500 } from "./types";

export class Page500 extends Block<TPage500> {
    constructor(tagName = "div", props: TPage500) {
        super(tagName, props);
    }

    render(): DocumentFragment {
        return this._compile(template500, this.props);
    }
}
