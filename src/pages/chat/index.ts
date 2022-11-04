import Avatar from "../../components/avatar/avatar";
import Button from "../../components/button/button";
import ChatHeader from "../../components/chat-header/chat-header";
import ChatItem from "../../components/chat-item/chat-item";
import Input from "../../components/input/input";
import Message from "../../components/message/message";
import ProfileBlock from "../../components/profile-block/profile-block";
import SearchBlock from "../../components/search-block/search-block";
import ChatPage from "./chat";

import render from "../../ts/render";

import avatarImg from "../../../static/img/avatar.svg";
import searchImg from "../../../static/img/search-icon.svg";
import createImg from "../../../static/img/create-icon.svg";

const profileBlockAvatar = new Avatar("div", {
    src: avatarImg,
    alt: "avatar image",
    attributes: {
        class: "avatar__wrapper avatar__wrapper--s",
    },
    settings: {
        witnInternalID: true
    }
});

const profileBlock = new ProfileBlock("div", {
    username: "Andrew",
    avatar: profileBlockAvatar,
    profileLink: "#",
    createImg: createImg,
    attributes: {
        class: "profile-block"
    },
    settings: {
        witnInternalID: true
    }
});

const searchBlock = new SearchBlock("div", {
    searchImg: searchImg,
    attributes: {
        class: "search-block"
    },
    settings: {
        witnInternalID: true
    }
});

const chatItemAvatar = new Avatar("div", {
    src: avatarImg,
    alt: "avatar image",
    attributes: {
        class: "avatar__wrapper avatar__wrapper--m",
    },
    settings: {
        witnInternalID: true
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
    },
    settings: {
        witnInternalID: true
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
    },
    settings: {
        witnInternalID: true
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
    },
    settings: {
        witnInternalID: true
    }
});

const chatHeader = new ChatHeader("header", {
    username: "John",
    avatar: chatItemAvatar,
    attributes: {
        class: "chat-header",
    },
    settings: {
        witnInternalID: true
    }
});

const myMessage = new Message("li", {
    text: "Hi! How are you?",
    time: "21:32",
    attributes: {
        class: "message message--right"
    },
    settings: {
        witnInternalID: true
    }
});

const notMyMessage = new Message("li", {
    text: "Hello! I'm fine",
    time: "21:33",
    attributes: {
        class: "message message--left"
    },
    settings: {
        witnInternalID: true
    }
});

const input = new Input("div", {
    placeholder: "Write a message...",
    name: "message",
    type: "text",
    chat: true,
    attributes: {
        class: "input__wrapper input__wrapper--chat",
    },
    settings: {
        witnInternalID: true
    }
});

const button = new Button("button", {
    type: "submit",
    content: `
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 14.833V3.16634" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M4 8.16699L9 3.16699L14 8.16699" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
</svg>`,
    attributes: {
        class: "button button--icon chat__button"
    },
    settings: {
        witnInternalID: true
    }
});

const chatPage = new ChatPage("main", {
    profileBlock: profileBlock,
    searchBlock: searchBlock,
    chatItems: [chatItem1, chatItem2, chatItem3],
    chatHeader: chatHeader,
    messages: [myMessage, notMyMessage],
    input: input,
    button: button,
    attributes: {
        class: "main-app"
    },
    settings: {
        witnInternalID: true
    }
});

render('#root', chatPage);
