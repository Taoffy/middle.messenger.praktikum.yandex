import { Link } from "../../components/link/link";
import { Page500 } from "./500";

const link = new Link('a', {
    text: "Back to chats",
    attributes: {
        class: "link link--font-weight-500",
        href: "../chats/chats.hbs",
        style: "margin-top: 60px"
    }
});

export const page500 = new Page500('main', {
    link: link,
    attributes: {
        class: "error-pages",
    }
});
