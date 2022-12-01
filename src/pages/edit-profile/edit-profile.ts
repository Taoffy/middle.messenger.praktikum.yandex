import { Block } from "../../ts/modules/Block/Block";
import { Button } from "../../components/button/button";
import { ProfileHeader } from "../../components/profile-header/profile-header";
import { ProfileInput } from "../../components/profile-input/profile-input";
import { Form } from "../../components/form/form";
import { Link } from "../../components/link/link";

import { formValidation } from "../../ts/components/form/form-validation";
import { inputListener } from "../../ts/components/input/input-listener";
import { inputErrors } from "../../ts/input-error";
import { setInputsValue } from "../../ts/utils/components/set-inputs-value";
import { getDataFromForm } from "../../ts/components/form/form-data-get";
import { goToHref } from "../../ts/components/link/go-to-href";

import { AuthController } from "../../controllers/auth-controller";
import { ProfileController } from "../../controllers/profile-controller";

import { store } from "../../store/Store";

import { router } from "..";
import { routes } from "../../ts/utils/routes";

import { editProfilePageTemplate } from "./edit-profile.template";

import { TEditProfilePage } from "./types";
import { TUserData } from "../../controllers/types";

import "./edit-profile.css";

const authController = new AuthController();
const profileController = new ProfileController();

const backLink = new Link("a", {
  text: "Back",
  attributes: {
      class: "profile-header__link",
      href: routes.profile,
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

const profileInputEmail = new ProfileInput("div", {
    heading: "Email",
    name: "email",
    type: "email",
    value: "",
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
    value: "",
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
    value: "",
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
    value: "",
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
    value: "",
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
    value: "",
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
      submit: (event: Event) => {
          event.preventDefault();

          const form = event.target as HTMLFormElement;
          const isErrorInForm = formValidation(form);

          if (!isErrorInForm) {
              const data = getDataFromForm(form);

              profileController.changeUserData(data as TUserData);
          }
      },
    }
});

export class EditProfilePage extends Block<TEditProfilePage> {
    constructor(tagName = "main") {
        super(tagName, {
            profileHeader: profileHeader,
            form: form,
            attributes: {
                class: "profile-wrapper",
            }
        });
    }

    public async componentDidMount() {
        if (!store.getState().isAuth) {
            await authController.getUserData();

            const isAuth = store.getState().isAuth;

            if (isAuth) {
                const user = store.getState().user;
                setInputsValue(this._element, user);
            } else {
                router.go(routes.login);
            }
        } else {
            const user = store.getState().user;
            setInputsValue(this._element, user);
        }
    }

    render(): DocumentFragment {
        return this._compile(editProfilePageTemplate, this.props);
    }
}
