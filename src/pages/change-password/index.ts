
import Button from "../../components/button/button";
import ProfileHeader from "../../components/profile-header/profile-header";
import ChangePasswordPage from "./change-password";

import render from "../../ts/render";
import ProfileInput from "../../components/profile-input/profile-input";

const profileHeader = new ProfileHeader("header", {
    text: "Edit profile",
    link: "../profile/profile.hbs",
    attributes: {
        class: "profile-header"
    }
});

const profileInputOldPassword = new ProfileInput("div", {
    name: "oldPassword",
    heading: "Old password",
    type: "password",
    value: "12345678",
    attributes: {
        class: "profile-input",
    }
});

const profileInputNewPassword = new ProfileInput("div", {
    name: "newPassword",
    heading: "New password",
    type: "password",
    value: "123456789",
    attributes: {
        class: "profile-input",
    }
});

const profileInputRepeatNewPassword = new ProfileInput("div", {
    name: "newPassword-2",
    heading: "Repeat new password",
    type: "password",
    value: "123456789",
    attributes: {
        class: "profile-input",
    }
});

const button = new Button("button", {
    type: "button",
    content: "Save",
    attributes: {
        class: "button button--less-padding button-font-weight-500"
    }
});


const changePasswordPage = new ChangePasswordPage("main", {
    inputs: [profileInputOldPassword, profileInputNewPassword, profileInputRepeatNewPassword],
    profileHeader: profileHeader,
    button: button,
    attributes: {
        class: "profile-wrapper",
    }
});

render("#root", changePasswordPage);
