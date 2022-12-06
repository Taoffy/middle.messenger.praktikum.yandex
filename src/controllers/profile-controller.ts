import { ProfileAPI } from "../api/profile-api";

import { router } from "../pages";
import { routes } from "../ts/utils/routes";

import { store } from "../store/Store";

import { TPasswordChange, TUserData } from "./types";

const profileAPI = new ProfileAPI();

export class ProfileController {
    public async changeUserData(data: TUserData) {
        return profileAPI
            .changeUserData(data)
            .then(response => {
                if (response.status === 200) {
                    store.set("user", JSON.parse(response.response));
                    router.go(routes.profile);
                } else {
                    throw new Error(JSON.parse(response.response).reason);
                }   
            })
            .catch(error => {
                console.log(error);
            })
    }

    public changeAvatar(data: FormData) {
        return profileAPI
            .changeAvatar(data)
            .then(response => {
                return store.set("user.avatar", JSON.parse(response.response).avatar);
            })
            .catch(error => {
                console.error(error);
            });
    }

    public changePassword(data: TPasswordChange) {
        return profileAPI
            .changePassword(data)
            .then(response => {
                if (response.status === 200) {
                    router.go(routes.profile);
                } else {
                    throw new Error(JSON.parse(response.response).reason);
                }
            })
            .catch(error => {
                console.error(error);
            });
    }
}
