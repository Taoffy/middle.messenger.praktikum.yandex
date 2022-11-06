import { Block } from "../../ts/modules/Block/Block";

import { profileBlockTemplate } from "./profile-block.template";
import { TProfileBlock } from "./types";

export class ProfileBlock extends Block<TProfileBlock> {
    constructor(tagName = "div", props: TProfileBlock) {
        super(tagName, props);
    }

    render(): DocumentFragment {
        return this._compile(profileBlockTemplate, this.props);
    }
}
