import Avatar from "../avatar/avatar";
import ChatHeader from "./chat-header";

const avatar = new Avatar("div", {
    alt: "avatar image",
    src: "../../../static/img/avatar.svg",
    size: "m"
});

const chatHeader = new ChatHeader("div", {
  username: "John",
  avatar: avatar,
});

export default chatHeader;