import { Block } from "../../ts/modules/Block/Block";

import { TSearchBlock } from "./types";
import { searchBlockTemplate } from "./search-block.template";

import "./search-block.css";

export class SearchBlock extends Block<TSearchBlock> {
    constructor(tagName = "div", props: TSearchBlock) {
        super(tagName, props);
    }

    render(): DocumentFragment {
        return this._compile(searchBlockTemplate, this.props);
    }
}
