import { BaseAPI, baseUrl } from "./base-api";

import { HTTPTransport } from "../ts/modules/HTTPTransport/HTTPTransport";

import { TUserData, TPasswordChange } from "../controllers/types";

const profileAPIInstance = new HTTPTransport(baseUrl);

export class ProfileAPI extends BaseAPI {
    public changeUserData(data: TUserData) {
        return profileAPIInstance.put("/user/profile", { data, headers: {"Content-Type": "application/json"} });
    }

    public changeAvatar(data: FormData) {
        return profileAPIInstance.put("/user/profile/avatar", { data });
    }

    public changePassword(data: TPasswordChange) {
        return profileAPIInstance.put("/user/password", { data, headers: {"Content-Type": "application/json"} });
    }
}
