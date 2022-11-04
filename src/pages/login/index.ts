import Button from "../../components/button/button";
import Input from "../../components/input/input";
import Link from "../../components/link/link";
import LoginPage from "./login";

import render from "../../ts/render";

const inputLogin = new Input("div", {
    placeholder: "LOGIN",
    name: "login",
    type: "text",
    attributes: {
        class: "input__wrapper",
        "data-content": "LOGIN"
    },
    settings: {
        witnInternalID: true
    }
});

const inputPassword =  new Input("div", {
    placeholder: "PASSWORD",
    name: "password",
    type: "password",
    attributes: {
        class: "input__wrapper",
        "data-content": "PASSWORD"
    },
    settings: {
        witnInternalID: true
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

const loginPage = new LoginPage("main", {
    inputs: [inputLogin, inputPassword],
    button: button,
    link: link,
    attributes: {
        class: "auth-pages auth-pages__login",
    },
    settings: {
        witnInternalID: true
    }
});

render("#root", loginPage);
