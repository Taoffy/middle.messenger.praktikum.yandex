import { chatPage } from "./chat";
import { chatsPage } from "./chats";
import { editProfilePage } from "./edit-profile";
import { loginPage } from "./login";
import { profilePage } from "./profile";
import { signupPage } from "./signup";
import { changePasswordPage } from "./change-password";
import { page404 } from "./404";
import { page500 } from "./500";

import { render } from "../ts/render";

document.querySelector("#login")?.addEventListener('click', (event) => {
    event.preventDefault();
    render("#root", loginPage);
});

document.querySelector("#signup")?.addEventListener('click', (event) => {
    event.preventDefault();
    render("#root", signupPage);
});

document.querySelector("#chats")?.addEventListener('click', (event) => {
    event.preventDefault();
    render("#root", chatsPage);
});

document.querySelector("#chat")?.addEventListener('click', (event) => {
    event.preventDefault();
    render("#root", chatPage);
});

document.querySelector("#profile")?.addEventListener('click', (event) => {
    event.preventDefault();
    render("#root", profilePage);
});

document.querySelector("#edit-profile")?.addEventListener('click', (event) => {
    event.preventDefault();
    render("#root", editProfilePage);
});

document.querySelector("#change-password")?.addEventListener('click', (event) => {
    event.preventDefault();
    render("#root", changePasswordPage);
});

document.querySelector("#404")?.addEventListener('click', (event) => {
    event.preventDefault();
    render("#root", page404);
});

document.querySelector("#500")?.addEventListener('click', (event) => {
    event.preventDefault();
    render("#root", page500);
});
