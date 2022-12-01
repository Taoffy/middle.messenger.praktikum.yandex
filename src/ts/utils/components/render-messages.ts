import { Message } from "../../../components/message/message";

import { store } from "../../../store/Store";

import { getTimeForChat } from "../get-time-for-chat";

export function renderMessages() {
    const messages = store.getState().messages;
    const messagesList = document.querySelector(".current-chat__day-messages");
    
    const messagesBlocks = messages.map((message: {isMyMessage: boolean, text: string, time: string }) => {
        return new Message("div", {
            text: message.text,
            time: getTimeForChat(message.time),
            attributes: {
                class: `message ${message.isMyMessage ? "message--right" : "message--left"}`,
            },
            settings: {
                witnInternalID: true,
            }
        }).element;
    });

    (messagesList as HTMLElement).innerHTML = "";
    messagesBlocks.forEach((message: HTMLElement) => messagesList?.append(message));
}
