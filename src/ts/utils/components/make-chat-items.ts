import { ChatItem } from "../../../components/chat-item/chat-item";

import { TChatObject } from "../../../types/common-types";

import { getTimeForChat } from "../get-time-for-chat";
import { renderCurrentChat } from "./render-current-chat";

import { store } from "../../../store/Store";

import { websocket } from "../../modules/ChatWebsocket/ChatWebsocket";

import { ChatsController } from "../../../controllers/chats-controller";

import avatarImg from "../../../../static/img/avatar.svg";

const chatsController = new ChatsController();

export function makeChatItems<T extends Array<TChatObject>>(chatItems: T) {
    const result = chatItems.map(chatItem => {
        return new ChatItem("li", {
            avatarSrc: chatItem.avatar,
            defaultSrc: avatarImg,
            title: chatItem.title,
            lastMessage: chatItem?.last_message?.content ? chatItem.last_message.content : '',
            time: chatItem?.last_message?.time ? getTimeForChat(chatItem.last_message.time) : "00:00",
            attributes: {
                class: "chat-item"
            },
            events: {
                click: async () => {
                    await chatsController.getToken({ chatId: chatItem.id });
                    store.set("currentChatId", chatItem.id);
                    renderCurrentChat(chatItem.title, chatItem.id);
                    websocket.connect();
                    chatsController.registerListeners();
                }
            }
        });
    });

    return result;
}
