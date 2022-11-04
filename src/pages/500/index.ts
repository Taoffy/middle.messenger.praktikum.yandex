import Link from "../../components/link/link";
import Page500 from "./500";

import render from "../../ts/render";

const link = new Link('a', {
    text: "Back to chats",
    attributes: {
        class: "link link--font-weight-500",
        href: "../chats/chats.hbs",
        style: "margin-top: 60px"
    }
});

const page500 = new Page500('main', {
    link: link,
    attributes: {
        class: "error-pages",
    }
});

render('#root', page500);
