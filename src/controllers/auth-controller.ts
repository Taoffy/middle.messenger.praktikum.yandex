import { AuthAPI } from "../api/auth-api";
import { store } from "../store/Store";
import { router } from "../pages";

import { TLoginData, TSignupData } from "./types";

import { routes } from "../ts/utils/routes";

const authAPI = new AuthAPI();

export class AuthController {
    public async login(data: TLoginData) {
        return authAPI
            .login(data)
            .then(response => {
                if(response.status === 200) {
                    router.go(routes.chats);
                } else {
                    throw new Error(JSON.parse(response.response).reason);
                }
            })
            .catch(error => {
                console.error(error);
            });
    }

    public async signUp(data: TSignupData) {
        return authAPI
            .signUp(data)
            .then((response) => {
                if (JSON.parse(response.response).id) {
                    router.go(routes.chats);
                } else {
                    throw new Error(JSON.parse(response.response).reason);
                }      
            })
            .catch(error => {
                console.error(error);
            });
    }

    public async logout() {
        return authAPI
            .logout()
            .then(response => {
                if (response.status === 200) {
                    store.set("isAuth", false);
                    router.go(routes.login);
                }
            })
            .catch(error => {
                console.error(error);
            });
    }

    public async getUserData() {
        return authAPI
            .getUser()
            .then((response) => {
                if (response.status === 200) {
                    store.set("user", JSON.parse(response.response));
                    store.set("isAuth", true);
                }
            })
            .catch(error => {
                console.error(error);
            });
    }
}
