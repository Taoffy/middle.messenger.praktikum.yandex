import { ChatsAPI } from "../api/chats-api";

import { store } from "../store/Store";

import { websocket } from "../ts/modules/ChatWebsocket/ChatWebsocket";
import { WEBSOCKET_EVENTS } from "../ts/modules/ChatWebsocket/events";

import { renderMessages } from "../ts/utils/components/render-messages";
import { scrollMessagesListToBottom } from "../ts/utils/scroll-messages-list-to-bottom";

import { TCreateChat, TDeleteChat, TUsersDataForChat, TToken } from "./types";

const chatsAPI = new ChatsAPI();

export class ChatsController {
    constructor() {
        this.getOldMessages = this.getOldMessages.bind(this);
        this.setMessages = this.setMessages.bind(this);
    }

    public getChats() {
        return chatsAPI
            .getChatsList()
            .then(response => {
                store.set("chats", JSON.parse(response.response));
            })
            .catch(error => {
                console.error(error);
            })
    }

    public createChat(data: TCreateChat) {
        return chatsAPI
            .createChat(data)
            .then(response => {
                if(response.status === 200) {
                    this.getChats();
                } else {
                    throw new Error(JSON.parse(response.response).reason);
                }
            })
            .catch(error => {
                console.error(error);
            })
    }

    public addUserToChat(data: TUsersDataForChat) {
        return chatsAPI
            .addUserToChat(data)
            .catch(error => {
                console.error(error);
            })
    }

    public deleteUserFromChat(data: TUsersDataForChat) {
        return chatsAPI
            .deleteUserFromChat(data)
            .catch(error => {
                console.error(error);
            })
    }

    public deleteChat(data: TDeleteChat) {
        return chatsAPI
            .deleteChat(data)
            .then(response => {
                if (response.status === 200) {
                    websocket.close();
                    store.set('currentChatId', '');
                    store.set('currentChat', undefined);
                    this.getChats();
                } else {
                    throw new Error(JSON.parse(response.response).reason);
                }
            })
            .catch(error => {
                console.error(error);
            })
    }

    public getToken(data: TToken) {
        return chatsAPI
            .getToken(data)
            .then(response => {
                if (response.status === 200) {
                    return JSON.parse(response.response);
                } else {
                    throw new Error(JSON.parse(response.response).reason);
                }
            })
            .then(data => {
                store.set('currentToken', data.token);
            })
            .catch(error => {
                console.error(error);
            })
    }

    public getOldMessages() {
        websocket.getMessages();
    }

    public setMessages(event: MessageEvent) {
        const messages = JSON.parse(event.data);
        const userId = store.getState().user.id;

        if (Array.isArray(messages)) {
            const oldMessages = messages.map(message => {
                return {
                    isMyMessage: message.user_id === userId,
                    text: message.content,
                    time: message.time
                }
            }).reverse();

            store.set('messages', oldMessages);
            renderMessages();
            scrollMessagesListToBottom();
        } else if (messages.type === "message") {
            const oldMessages = store.getState().messages;
            oldMessages.push({
                isMyMessage: messages.user_id === userId,
                text: messages.content,
                time: messages.time
            });
            store.set ('messages', oldMessages);
            renderMessages();
            scrollMessagesListToBottom();
        }
    }

    private onClose() {
        console.log('websocket closed!');
    }

    public registerListeners() {
        websocket.on(WEBSOCKET_EVENTS.open, this.getOldMessages);
        websocket.on(WEBSOCKET_EVENTS.message, this.setMessages);
        websocket.on(WEBSOCKET_EVENTS.close, this.onClose);
    }

    public unregisterListeners() {
        websocket.off(WEBSOCKET_EVENTS.open, this.getOldMessages);
        websocket.off(WEBSOCKET_EVENTS.message, this.setMessages);
        websocket.off(WEBSOCKET_EVENTS.close, this.onClose);
    }
}
