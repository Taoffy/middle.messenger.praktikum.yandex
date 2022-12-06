import { Block } from "../../ts/modules/Block/Block";

import { profileBlockTemplate } from "./profile-block.template";
import { TProfileBlock } from "./types";
import { Indexed } from "../../types/common-types";

import { connect } from "../../ts/common/connect";

import "./profile-block.css";

class ProfileBlock<T extends object = TProfileBlock> extends Block<T> {
    constructor(tagName = "div", props: TProfileBlock) {
        super(tagName, props);
    }

    render(): DocumentFragment {
        return this._compile(profileBlockTemplate, this.props);
    }
}

function mapStateToProps(state: Indexed) {
    return {
        username: state.user?.first_name,
    }
}

export default connect(ProfileBlock, mapStateToProps);
