import { BaseAPI, baseUrl } from "./base-api";

import { HTTPTransport } from "../ts/modules/HTTPTransport/HTTPTransport";

import { TCreateChat, TUsersDataForChat, TDeleteChat, TToken } from "../controllers/types";

const chatsAPIInstance = new HTTPTransport(baseUrl);

export class ChatsAPI extends BaseAPI {
    public getChatsList() {
        return chatsAPIInstance.get("/chats", {});
    }

    public createChat(data: TCreateChat) {
        return chatsAPIInstance.post("/chats", { data, headers: {"Content-Type": "application/json"} });
    }

    public addUserToChat(data: TUsersDataForChat) {
        return chatsAPIInstance.put("/chats/users", { data, headers: {"Content-Type": "application/json"} });
    }

    public deleteUserFromChat(data: TUsersDataForChat) {
        return chatsAPIInstance.delete("/chats/users", { data, headers: {"Content-Type": "application/json"} });
    }

    public deleteChat(data: TDeleteChat) {
        return chatsAPIInstance.delete("/chats", { data, headers: {"Content-Type": "application/json"} });
    }

    public getToken(data: TToken) {
        return chatsAPIInstance.post(`/chats/token/${data.chatId}`, {});
    }
}
