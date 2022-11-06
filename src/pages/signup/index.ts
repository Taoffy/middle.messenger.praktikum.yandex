import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import { Link } from "../../components/link/link";
import { Form } from "../../components/form/form";
import { SignupPage } from "./signup";

import { render } from "../../ts/render";
import { inputListener } from "../../ts/components/input/input-listener";

import { inputErrors } from "../../ts/input-error";
import { formSubmit } from "../../ts/components/form-submit";

const inputEmail = new Input("div", {
    placeholder: "EMAIL",
    name: "email",
    type: "email",
    error: inputErrors.email,
    attributes: {
        class: "input__wrapper",
        "data-content": "EMAIL"
    },
    events: {
        blur: inputListener,
        focus: inputListener,
    }
});

const inputLogin = new Input("div", {
    placeholder: "LOGIN",
    name: "login",
    type: "text",
    error: inputErrors.login,
    attributes: {
        class: "input__wrapper",
        "data-content": "LOGIN"
    },
    events: {
        blur: inputListener,
        focus: inputListener,
    }
});

const inputFirstName = new Input("div", {
    placeholder: "FIRST NAME",
    name: "first_name",
    type: "text",
    error: inputErrors.names,
    attributes: {
        class: "input__wrapper",
        "data-content": "FIRST NAME"
    },
    events: {
        blur: inputListener,
        focus: inputListener,
    }
});

const inputSecondName = new Input("div", {
    placeholder: "LAST NAME",
    name: "second_name",
    type: "text",
    error: inputErrors.names,
    attributes: {
        class: "input__wrapper",
        "data-content": "LAST NAME"
    },
    events: {
        blur: inputListener,
        focus: inputListener,
    }
});

const inputPhone =  new Input("div", {
    placeholder: "PHONE",
    name: "phone",
    type: "tel",
    error: inputErrors.phone,
    attributes: {
        class: "input__wrapper",
        "data-content": "PHONE"
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
    events: {
        blur: inputListener,
        focus: inputListener,
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

const form = new Form("form", {
    inputs: [inputEmail, inputLogin, inputFirstName, inputSecondName, inputPhone, inputPassword],
    button: button,
    link: link,
    attributes: {
        class: "signup__form",
    },
    events: {
        submit: formSubmit,
    }
});

const signupPage = new SignupPage("main", {
    form: form,
    attributes: {
        class: "auth-pages auth-pages__signup",
    }
});

render("#root", signupPage);
