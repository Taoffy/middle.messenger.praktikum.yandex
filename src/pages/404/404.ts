import { Block } from "../../ts/modules/Block/Block";
import { Link } from "../../components/link/link";

import { template404 } from "./404.template";
import { TPage404 } from "./types";

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

export class Page404 extends Block<TPage404> {
    constructor(tagName = "div") {
        super(tagName, {
            link: link,
            attributes: {
                class: "error-pages",
            }
        });
    }

    render(): DocumentFragment {
        return this._compile(template404, this.props);
    }
}
