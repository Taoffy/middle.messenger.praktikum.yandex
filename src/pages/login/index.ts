import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import { Link } from "../../components/link/link";
import { Form } from "../../components/form/form";
import { LoginPage } from "./login";

import { formSubmit } from "../../ts/components/form-submit";
import { inputListener } from "../../ts/components/input/input-listener";

import { inputErrors } from "../../ts/input-error";

const inputLogin = new Input("div", {
    placeholder: "LOGIN",
    name: "login",
    type: "text",
    error: inputErrors.login,
    attributes: {
        class: "input__wrapper",
        "data-content": "LOGIN"
    },
    settings: {
        witnInternalID: true
    },
    events: {
        blur: inputListener,
        focus: inputListener,
    }
});

const inputPassword =  new Input("div", {
    placeholder: "PASSWORD",
    name: "password",
    type: "password",
    error: inputErrors.password,
    attributes: {
        class: "input__wrapper",
        "data-content": "PASSWORD"
    },
    settings: {
        witnInternalID: true
    },
    events: {
        blur: inputListener,
        focus: inputListener,
    }
});

const button = new Button("button", {
    type: "submit",
    content: "Sign in",
    attributes: {
        class: "button button--uppercase"
    },
    settings: {
        witnInternalID: true
    }
});

const link = new Link("a", {
    text: "Sign up",
    attributes: {
        class: "link link--uppercase",
        style: 'margin-top: 24px;',
        href: '../signup/signup.hbs',
    },
    settings: {
        witnInternalID: true
    }
});

const form = new Form("form", {
    inputs: [inputLogin, inputPassword],
    button: button,
    link: link,
    attributes: {
        class: "login__form",
    },
    events: {
        submit: formSubmit,
    }
});

export const loginPage = new LoginPage("main", {
    form: form,
    attributes: {
        class: "auth-pages auth-pages__login",
    },
    settings: {
        witnInternalID: true
    }
});
