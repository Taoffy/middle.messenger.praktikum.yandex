import { Block } from "../../ts/modules/Block/Block";
import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import { Link } from "../../components/link/link";
import { Form } from "../../components/form/form";

import { signupPageTemplate } from "./signup.template";
import { TSignupPage } from "./types";
import { Indexed } from "../../types/common-types";
import { TSignupData } from "../../controllers/types";

import { inputListener } from "../../ts/components/input/input-listener";
import { inputErrors } from "../../ts/input-error";
import { formValidation } from "../../ts/components/form/form-validation";
import { getDataFromForm } from "../../ts/components/form/form-data-get";
import { connect } from "../../ts/common/connect";
import { goToHref } from "../../ts/components/link/go-to-href";
import { clearInputs } from "../../ts/utils/components/clear-inputs";

import { store } from "../../store/Store";

import { router } from "..";
import { routes } from "../../ts/utils/routes";

import { AuthController } from "../../controllers/auth-controller";

import "./signup.css";

const authController = new AuthController();

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
    text: "Sign in",
    attributes: {
        class: "link link--uppercase",
        style: 'margin-top: 24px;',
        href: routes.login,
    },
    events: {
        click: goToHref
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
      submit: (event: Event) => {
          event.preventDefault();

          const form = event.target as HTMLFormElement;
          const isErrorInForm = formValidation(form);

          if (!isErrorInForm) {
              const data = getDataFromForm(form);

              authController.signUp(data as TSignupData);
          }
      },
  }
});
export class SignupPage<T extends object = TSignupPage> extends Block<T> {
    constructor(tagName = "main") {
        super(tagName, {
            form: form,
            attributes: {
                class: "auth-pages auth-pages__signup",
            }
        });
    }

    public async componentDidMount() {
        clearInputs(this.element);
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
        return this._compile(signupPageTemplate, this.props);
    }
}

function mapStateToProps(state: Indexed) {
    console.log(state);
    return {}
}

export default connect(SignupPage, mapStateToProps);
