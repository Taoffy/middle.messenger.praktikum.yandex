import { ChatsPage } from "./chats";
import { EditProfilePage } from "./edit-profile";
import { LoginPage } from "./login";
import { ProfilePage } from "./profile";
import { SignupPage } from "./signup";
import { ChangePasswordPage } from "./change-password";
import { Page404 } from "./404";
import { Page500 } from "./500";

import { Router } from "../ts/modules/Router/Router";

import { routes } from "../ts/utils/routes";

const router = new Router("#root");

router
    .use(routes.login, LoginPage)
    .use(routes[404], Page404)
    .use(routes[500], Page500)
    .use(routes.chats, ChatsPage)
    .use(routes.editProfile, EditProfilePage)
    .use(routes.profile, ProfilePage)
    .use(routes.signup, SignupPage)
    .use(routes.changePassword, ChangePasswordPage);

router.start();

export { router };
