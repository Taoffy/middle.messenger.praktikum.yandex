import Button from "../../components/button/button";
import Input from "../../components/input/input";
import Link from "../../components/link/link";
import render from "../../ts/render";
import SignupPage from "./signup";

const inputEmail = new Input("div", {
    placeholder: "EMAIL",
    name: "email",
    type: "email",
    attributes: {
        class: "input__wrapper",
        "data-content": "EMAIL"
    }
});

const inputLogin = new Input("div", {
    placeholder: "LOGIN",
    name: "login",
    type: "text",
    attributes: {
        class: "input__wrapper",
        "data-content": "LOGIN"
    }
});

const inputFirstName = new Input("div", {
    placeholder: "FIRST NAME",
    name: "first_name",
    type: "text",
    attributes: {
        class: "input__wrapper",
        "data-content": "FIRST NAME"
    }
});

const inputSecondName = new Input("div", {
    placeholder: "LAST NAME",
    name: "second_name",
    type: "text",
    attributes: {
        class: "input__wrapper",
        "data-content": "LAST NAME"
    }
});

const inputPhone =  new Input("div", {
    placeholder: "PHONE",
    name: "phone",
    type: "tel",
    attributes: {
        class: "input__wrapper",
        "data-content": "PHONE"
    }
});

const inputPassword =  new Input("div", {
    placeholder: "PASSWORD",
    name: "password",
    type: "password",
    attributes: {
        class: "input__wrapper",
        "data-content": "PASSWORD"
    }
});

const button = new Button("button", {
    type: "submit",
    content: "Sign up",
    attributes: {
        class: "button button--uppercase button--font-weight-800"
    }
});

const link = new Link("a", {
    text: "Sign up",
    attributes: {
        class: "link link--uppercase",
        style: 'margin-top: 24px;',
        href: "../login/login.hbs"
    }
});

const signupPage = new SignupPage("main", {
    inputs: [inputEmail, inputLogin, inputFirstName, inputSecondName, inputPhone, inputPassword],
    button: button,
    link: link,
    attributes: {
        class: "auth-pages auth-pages__signup",
    }
});

render("#root", signupPage);
