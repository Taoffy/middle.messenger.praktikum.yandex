import { Button } from "../../components/button/button";
import { ProfileHeader } from "../../components/profile-header/profile-header";
import { ProfileInput } from "../../components/profile-input/profile-input";
import { Form } from "../../components/form/form";
import { EditProfilePage } from "./edit-profile";

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

const profileInputEmail = new ProfileInput("div", {
    heading: "Email",
    name: "email",
    type: "email",
    value: "pochta@yandex.ru",
    error: inputErrors.email,
    attributes: {
        class: "profile-input",
    },
    events: {
        focus: inputListener,
        blur: inputListener
    }
});

const profileInputLogin = new ProfileInput("div", {
    heading: "Login",
    name: "login",
    type: "text",
    value: "andrewandrew",
    error: inputErrors.login,
    attributes: {
        class: "profile-input",
    },
    events: {
        focus: inputListener,
        blur: inputListener
    }
});

const profileInputFirstName = new ProfileInput("div", {
    heading: "First name",
    name: "first_name",
    type: "text",
    value: "Andrew",
    error: inputErrors.names,
    attributes: {
        class: "profile-input",
    },
    events: {
        focus: inputListener,
        blur: inputListener
    }
});

const profileInputSecondName = new ProfileInput("div", {
    heading: "Second name",
    name: "second_name",
    type: "text",
    value: "Tereshin",
    error: inputErrors.names,
    attributes: {
        class: "profile-input",
    },
    events: {
        focus: inputListener,
        blur: inputListener
    }
});

const profileInputDisplayName = new ProfileInput("div", {
    heading: "Display name",
    name: "display_name",
    type: "text",
    value: "Nickname",
    error: inputErrors.login,
    attributes: {
        class: "profile-input",
    },
    events: {
        focus: inputListener,
        blur: inputListener
    }
});

const profileInputPhone = new ProfileInput("div", {
    heading: "Phone",
    name: "phone",
    type: "tel",
    value: "89106411050",
    error: inputErrors.phone,
    attributes: {
        class: "profile-input profile-input--without-border",
    },
    events: {
        focus: inputListener,
        blur: inputListener
    }
});

const button = new Button("button", {
    type: "submit",
    content: "Save",
    attributes: {
        class: "button button--less-padding button--font-weight-500",
    }
});

const form = new Form("form", {
    inputs: [profileInputEmail, profileInputLogin, profileInputFirstName, profileInputSecondName, profileInputDisplayName, profileInputPhone],
    button: button,
    attributes: {
        class: "profile-form",
    },
    events: {
        submit: formSubmit,
    }
});

export const editProfilePage = new EditProfilePage("main", {
    profileHeader: profileHeader,
    form: form,
    attributes: {
        class: "profile-wrapper",
    }
});
