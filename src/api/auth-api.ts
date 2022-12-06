import { BaseAPI, baseUrl } from "./base-api";

import { HTTPTransport } from "../ts/modules/HTTPTransport/HTTPTransport";
import { TLoginData, TSignupData } from "../controllers/types";

const AuthAPIInstance = new HTTPTransport(baseUrl);

export class AuthAPI extends BaseAPI {
    public login(data: TLoginData) {
        return AuthAPIInstance.post("/auth/signin", { data, headers: {"Content-Type": "application/json"} });
    }

    public signUp(data: TSignupData) {
        return AuthAPIInstance.post("/auth/signup", { data, headers: {"Content-Type": "application/json"} });
    }

    public logout() {
        return AuthAPIInstance.post("/auth/logout", {});
    }

    public getUser() {
        return AuthAPIInstance.get("/auth/user", { headers: {"accept": "application/json"} });
    }
}
