import { Block } from "../../ts/modules/Block/Block";
import { Link } from "../../components/link/link";

import { template500 } from "./500.template";
import { TPage500 } from "./types";

import { goToHref } from "../../ts/components/link/go-to-href";

import { routes } from "../../ts/utils/routes";

const link = new Link('a', {
    text: "Back to chats",
    attributes: {
        class: "link link--font-weight-500",
        href: routes.chats,
        style: "margin-top: 60px"
    },
    events: {
        click: goToHref,
    }
});

export class Page500 extends Block<TPage500> {
    constructor(tagName = "div") {
        super(tagName, {
            link: link,
        });
    }

    render(): DocumentFragment {
        return this._compile(template500, this.props);
    }
}
