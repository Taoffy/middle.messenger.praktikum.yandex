import Button from "../../components/button/button";
import ProfileHeader from "../../components/profile-header/profile-header";
import ProfileInput from "../../components/profile-input/profile-input";
import render from "../../ts/render";
import EditProfilePage from "./edit-profile";

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
    attributes: {
        class: "profile-input",
    }
});

const profileInputLogin = new ProfileInput("div", {
    heading: "Login",
    name: "login",
    type: "text",
    value: "andrewandrew",
    attributes: {
        class: "profile-input",
    }
});

const profileInputFirstName = new ProfileInput("div", {
    heading: "First name",
    name: "first_name",
    type: "text",
    value: "Andrew",
    attributes: {
        class: "profile-input",
    }
});

const profileInputSecondName = new ProfileInput("div", {
    heading: "Second name",
    name: "second_name",
    type: "text",
    value: "Tereshin",
    attributes: {
        class: "profile-input",
    }
});

const profileInputDisplayName = new ProfileInput("div", {
    heading: "Display name",
    name: "display_name",
    type: "text",
    value: "Nickname",
    attributes: {
        class: "profile-input",
    }
});

const profileInputPhone = new ProfileInput("div", {
    heading: "Phone",
    name: "phone",
    type: "tel",
    value: "89106411050",
    attributes: {
        class: "profile-input profile-input--without-border",
    }
});

const button = new Button("button", {
    type: "submit",
    content: "Save",
    attributes: {
        class: "button button--less-padding button--font-weight-500",
    }
});

const editProfilePage = new EditProfilePage("main", {
    profileHeader: profileHeader,
    inputs: [profileInputEmail, profileInputLogin, profileInputFirstName, profileInputSecondName, profileInputDisplayName, profileInputPhone],
    button: button,
    attributes: {
        class: "profile-wrapper",
    }
});

render("#root", editProfilePage);
