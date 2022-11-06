
import { Button } from "../../components/button/button";
import { ProfileHeader } from "../../components/profile-header/profile-header";
import { ProfileInput } from "../../components/profile-input/profile-input";
import { Form } from "../../components/form/form";
import { ChangePasswordPage } from "./change-password";

import { formSubmit } from "../../ts/components/form-submit";
import { inputListener } from "../../ts/components/input/input-listener";

import { inputErrors } from "../../ts/input-error";

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
    error: inputErrors.password,
    attributes: {
        class: "profile-input",
    },
    events: {
        focus: inputListener,
        blur: inputListener
    }
});

const profileInputNewPassword = new ProfileInput("div", {
    name: "newPassword",
    heading: "New password",
    type: "password",
    value: "123456789",
    error: inputErrors.password,
    attributes: {
        class: "profile-input",
    },
    events: {
        focus: inputListener,
        blur: inputListener
    }
});

const profileInputRepeatNewPassword = new ProfileInput("div", {
    name: "newPassword-2",
    heading: "Repeat new password",
    type: "password",
    value: "123456789",
    error: inputErrors.password,
    attributes: {
        class: "profile-input",
    },
    events: {
        focus: inputListener,
        blur: inputListener
    }
});

const button = new Button("button", {
    type: "button",
    content: "Save",
    attributes: {
        class: "button button--less-padding button-font-weight-500"
    }
});

const form = new Form("form", {
    inputs: [profileInputOldPassword, profileInputNewPassword, profileInputRepeatNewPassword],
    button: button,
    attributes: {
        class: "profile-form",
    },
    events: {
        submit: formSubmit,
    }
});


export const changePasswordPage = new ChangePasswordPage("main", {
    profileHeader: profileHeader,
    form: form,
    attributes: {
        class: "profile-wrapper",
    }
});
