import { store } from "../../../store/Store";
import { EventBus } from "../EventBus/EventBus";

import { WEBSOCKET_EVENTS } from "./events";

const baseUrl = 'ya-praktikum.tech';

class ChatWebsocket extends EventBus {
    private websocket!: WebSocket;
    private timer: ReturnType<typeof setInterval>|undefined;

    constructor() {
        super();

        this.onOpen = this.onOpen.bind(this);
        this.onMessage = this.onMessage.bind(this);
        this.onError = this.onError.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    private onOpen() {
        this.emit(WEBSOCKET_EVENTS.open);
    }

    private onMessage(event: MessageEvent) {
        const { data } = event; 
        this.emit(WEBSOCKET_EVENTS.message, { data });
    }

    private onError(event: Event) {
        this.emit(WEBSOCKET_EVENTS.error, (event as ErrorEvent).message);
    }

    private onClose() {
        this.emit(WEBSOCKET_EVENTS.close);
    }

    private subscribeToEvents() {
        this.websocket.addEventListener("open", this.onOpen);
        this.websocket.addEventListener("message", this.onMessage);
        this.websocket.addEventListener("error", this.onError);
        this.websocket.addEventListener("close", this.onClose);
    }

    private unsubscribeFromEvents() {
        this.websocket.removeEventListener("open", this.onOpen);
        this.websocket.removeEventListener("message", this.onMessage);
        this.websocket.removeEventListener("error", this.onError);
        this.websocket.removeEventListener("close", this.onClose);
    }

    public connect() {
        if(this.websocket) {
            this.close();
        }
        const userId = store.getState().user.id;
        const chatId = store.getState().currentChatId;
        const token = store.getState().currentToken;

        this.websocket = new WebSocket(`wss://${baseUrl}/ws/chats/${userId}/${chatId}/${token}`);
        this.subscribeToEvents();

        this.timer = setInterval(() => {  
            this.ping();
        }, 5000);
    }

    public ping() {
        this.websocket.send(JSON.stringify({ type: "ping" }));
    }

    public sendMessage(message: string) {
        this.websocket.send(JSON.stringify({ content: message, type: "message" }));
    }

    public getMessages() {
        this.websocket.send(JSON.stringify({content: 0, type: "get old"}));
    }

    public close() {
        this.unsubscribeFromEvents();
        this.websocket.close();
        clearInterval(this.timer);
        this.timer = undefined;
    }
}

export const websocket = new ChatWebsocket();
