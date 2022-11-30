import { AuthController } from "../../controllers/auth-controller";

import { Block } from "../../ts/modules/Block/Block";
import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import { Link } from "../../components/link/link";
import { Form } from "../../components/form/form";

import { loginPageTemplate } from "./login.template";
import { TLoginPage } from "./types";
import { TLoginData } from "../../controllers/types"

import { inputListener } from "../../ts/components/input/input-listener";
import { inputErrors } from "../../ts/input-error";
import { formValidation } from "../../ts/components/form/form-validation";
import { getDataFromForm } from "../../ts/components/form/form-data-get";
import { goToHref } from "../../ts/components/link/go-to-href";

import { store } from "../../store/Store";

import { router } from "..";
import { routes } from "../../ts/utils/routes";

import "./login.css";


const authController = new AuthController();

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
        href: routes.signup,
    },
    settings: {
        witnInternalID: true
    },
    events: {
        click: goToHref,
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
      submit: (event: Event) => {
          event.preventDefault();

          const form = event.target as HTMLFormElement;
          const isErrorInForm = formValidation(form);

          if (!isErrorInForm) {
              const data = getDataFromForm(form);

              authController.login(data as TLoginData);
          }
      },
    }
});

export class LoginPage extends Block<TLoginPage> {
    constructor(tagName = "main") {
        super(tagName, { 
            form: form,
            attributes: {
                class: "auth-pages auth-pages__login",
            },
            settings: {
                witnInternalID: true
          }
         });
    }

    public async componentDidMount() {
        if (store.getState().isAuth) {
          router.go(routes.chats);
        } else {
            await authController.getUserData();

            const isAuth = store.getState().isAuth;

            if (isAuth) {
                router.go(routes.chats);
            }
        }
    }

    render(): DocumentFragment {
        return this._compile(loginPageTemplate, this.props);
    }
}
