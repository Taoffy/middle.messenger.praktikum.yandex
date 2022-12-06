import { Block } from "../../ts/modules/Block/Block";
import { Button } from "../../components/button/button";
import { ProfileHeader } from "../../components/profile-header/profile-header";
import { ProfileInput } from "../../components/profile-input/profile-input";
import { Form } from "../../components/form/form";
import { Link } from "../../components/link/link";

import { formValidation } from "../../ts/components/form/form-validation";
import { inputListener } from "../../ts/components/input/input-listener";
import { inputErrors } from "../../ts/input-error";
import { getDataFromForm } from "../../ts/components/form/form-data-get";
import { goToHref } from "../../ts/components/link/go-to-href";
import { clearInputs } from "../../ts/utils/components/clear-inputs";

import { AuthController } from "../../controllers/auth-controller";
import { ProfileController } from "../../controllers/profile-controller";

import { store } from "../../store/Store";

import { router } from "..";
import { routes } from "../../ts/utils/routes";

import { changePasswordTemplate } from "./change-password.template";
import { TChangePasswordPage } from "./types";
import { TPasswordChange } from "../../controllers/types";

import "./change-password.css";

const authController = new AuthController();
const profileController = new ProfileController();

const backLink = new Link("a", {
    text: "Back",
    attributes: {
        class: "profile-header__link",
        href: '/profile',
    },
    settings: {
        witnInternalID: true
    },
    events: {
        click: goToHref,
    }
});

const profileHeader = new ProfileHeader("header", {
    text: "Edit profile",
    link: backLink,
    attributes: {
        class: "profile-header"
    }
});

const profileInputOldPassword = new ProfileInput("div", {
    name: "oldPassword",
    heading: "Old password",
    type: "password",
    value: "",
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
    value: "",
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
    value: "",
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
        submit: (event: Event) => {
            event.preventDefault();

            const form = event.target as HTMLFormElement;
            const isErrorInForm = formValidation(form);

            if (!isErrorInForm) {
                const data = getDataFromForm(form, true);

                profileController.changePassword(data as TPasswordChange);
            }
        },
    }
});

export class ChangePasswordPage extends Block<TChangePasswordPage> {
      constructor(tagName = "div") {
          super(tagName, {
              profileHeader: profileHeader,
              form: form,
              attributes: {
                  class: "profile-wrapper",
              }
          });
      }

      public async componentDidMount() {
          clearInputs(this.element);
          if (!store.getState().isAuth) {
              await authController.getUserData();

              const isAuth = store.getState().isAuth;

              if(!isAuth) {
                router.go(routes.login);
              }
          }
      }
      
      render(): DocumentFragment {
          return this._compile(changePasswordTemplate, this.props);
      }
}
