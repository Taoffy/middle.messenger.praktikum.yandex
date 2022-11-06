import { Avatar } from "../../components/avatar/avatar";
import { ChatItem } from "../../components/chat-item/chat-item";
import { ProfileBlock } from "../../components/profile-block/profile-block";
import { SearchBlock } from "../../components/search-block/search-block";
import { ChatsPage } from "./chats";

import avatarImg from "../../../static/img/avatar.svg";
import searchImg from "../../../static/img/search-icon.svg";
import createImg from "../../../static/img/create-icon.svg";

const profileBlockAvatar = new Avatar("div", {
    src: avatarImg,
    alt: "avatar image",
    attributes: {
        class: "avatar__wrapper avatar__wrapper--s",
    }
});

const profileBlock = new ProfileBlock("div", {
    username: "Andrew",
    avatar: profileBlockAvatar,
    profileLink: "#",
    createImg: createImg,
    attributes: {
        class: "profile-block"
    }
});

const searchBlock = new SearchBlock("div", {
    searchImg: searchImg,
    attributes: {
        class: "search-block"
    }
});

const chatItemAvatar = new Avatar("div", {
    src: avatarImg,
    alt: "avatar image",
    attributes: {
        class: "avatar__wrapper avatar__wrapper--m",
    }
});

const chatItem1 = new ChatItem("li", {
    avatar: chatItemAvatar,
    username: "Andrew",
    lastMessage: "Hello",
    time: "21:30",
    newMessages: 2,
    attributes: {
        class: "chat-item",
    }
});

const chatItem2 = new ChatItem("li", {
  avatar: chatItemAvatar,
  username: "Andrew",
  lastMessage: "Hello",
  time: "21:30",
  newMessages: 2,
  attributes: {
      class: "chat-item",
  }
});

const chatItem3 = new ChatItem("li", {
  avatar: chatItemAvatar,
  username: "Andrew",
  lastMessage: "Hello",
  time: "21:30",
  newMessages: 2,
  attributes: {
      class: "chat-item",
  }
});

export const chatsPage = new ChatsPage("main", {
    profileBlock: profileBlock,
    searchBlock: searchBlock,
    chatItems: [chatItem1, chatItem2, chatItem3],
    attributes: {
        class: "main-app"
    }
});
