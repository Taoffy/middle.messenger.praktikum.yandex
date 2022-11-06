import { Link } from "../../components/link/link";
import { Page404 } from "./404";

const link = new Link('a', {
    text: "Back to chats",
    attributes: {
        class: "link link--font-weight-500",
        href: "../chats/chats.hbs",
        style: "margin-top: 60px"
    }
});

export const page404 = new Page404('main', {
    link: link,
    attributes: {
        class: "error-pages",
    }
});
