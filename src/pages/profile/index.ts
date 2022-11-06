import { ProfileHeader } from "../../components/profile-header/profile-header";
import { ProfileInput } from "../../components/profile-input/profile-input";
import { Form } from "../../components/form/form";
import { ProfilePage } from "./profile";

const profileHeader = new ProfileHeader("header", {
    text: "Profile",
    link: "../chats/chats.hbs",
    attributes: {
        class: "profile-header"
    }
});

const profileInputEmail = new ProfileInput("div", {
    heading: "Email",
    name: "email",
    type: "email",
    value: "pochta@yandex.ru",
    disabled: true,
    attributes: {
        class: "profile-input",
    }
});

const profileInputLogin = new ProfileInput("div", {
    heading: "Login",
    name: "login",
    type: "text",
    value: "andrewandrew",
    disabled: true,
    attributes: {
        class: "profile-input",
    }
});

const profileInputFirstName = new ProfileInput("div", {
    heading: "First name",
    name: "first_name",
    type: "text",
    value: "Andrew",
    disabled: true,
    attributes: {
        class: "profile-input",
    }
});

const profileInputSecondName = new ProfileInput("div", {
    heading: "Second name",
    name: "second_name",
    type: "text",
    value: "Tereshin",
    disabled: true,
    attributes: {
        class: "profile-input",
    }
});

const profileInputDisplayName = new ProfileInput("div", {
    heading: "Display name",
    name: "display_name",
    type: "text",
    value: "Nickname",
    disabled: true,
    attributes: {
        class: "profile-input",
    }
});

const profileInputPhone = new ProfileInput("div", {
    heading: "Phone",
    name: "phone",
    type: "tel",
    value: "89106411050",
    disabled: true,
    attributes: {
        class: "profile-input profile-input--without-border",
    }
});

const form = new Form("form", {
    inputs: [profileInputEmail, profileInputLogin, profileInputFirstName, profileInputSecondName, profileInputDisplayName, profileInputPhone],
    content: `<div class="profile__settings-links">
    <a class="profile__settings-link profile__settings-link--blue" href="#">Edit profile</a>
    <a class="profile__settings-link profile__settings-link--blue" href="#">Change password</a>
    <a class="profile__settings-link profile__settings-link--red" href="#">Log out</a>
</div>`,
    attributes: {
        class: "profile-form profile__form",
    }
})

export const profilePage = new ProfilePage("main", {
    profileHeader: profileHeader,
    form: form,
    attributes: {
        class: "profile-wrapper",
    }
});
