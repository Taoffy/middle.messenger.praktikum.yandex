import { Block } from "../../ts/modules/Block/Block";
import { ProfileHeader } from "../../components/profile-header/profile-header";
import { Form } from "../../components/form/form";
import { Link } from "../../components/link/link";
import { ProfileInput } from "../../components/profile-input/profile-input";
import { Modal } from "../../components/modal/modal";
import { AvatarInput } from "../../components/avatar-input/avatar-input";
import { Button } from "../../components/button/button";

import { profilePageTemplate } from "./profile.template";
import { TProfilePage } from "./types";
import { Indexed } from "../../types/common-types";

import { AuthController } from "../../controllers/auth-controller";
import { ProfileController } from "../../controllers/profile-controller";

import { store } from "../../store/Store";

import { router } from "..";
import { routes } from "../../ts/utils/routes";

import { connect } from "../../ts/common/connect";

import { goToHref } from "../../ts/components/link/go-to-href";
import { closeModal } from "../../ts/components/modal/close-modal";
import { setInputsValue } from "../../ts/utils/components/set-inputs-value";
import { clearInputs } from "../../ts/utils/components/clear-inputs";

import "./profile.css";

const authController = new AuthController();
const profileController = new ProfileController();

const backLink = new Link("a", {
    text: "Back",
    attributes: {
        class: "profile-header__link",
        href: routes.chats,
    },
    settings: {
        witnInternalID: true
    },
    events: {
        click: goToHref,
    }
});

const profileHeader = new ProfileHeader("header", {
    text: "Profile",
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
    disabled: true,
    attributes: {
        class: "profile-input",
    },
    settings: {
        witnInternalID: true
    },
});

const profileInputLogin = new ProfileInput("div", {
    heading: "Login",
    name: "login",
    type: "text",
    value: "",
    disabled: true,
    attributes: {
        class: "profile-input",
    },
    settings: {
        witnInternalID: true
    },
});

const profileInputFirstName = new ProfileInput("div", {
    heading: "First name",
    name: "first_name",
    type: "text",
    value: "",
    disabled: true,
    attributes: {
        class: "profile-input",
    },
    settings: {
        witnInternalID: true
    },
});

const profileInputSecondName = new ProfileInput("div", {
    heading: "Second name",
    name: "second_name",
    type: "text",
    value: "",
    disabled: true,
    attributes: {
        class: "profile-input",
    },
    settings: {
        witnInternalID: true
    },
});

const profileInputDisplayName = new ProfileInput("div", {
    heading: "Display name",
    name: "display_name",
    type: "text",
    value: "",
    disabled: true,
    attributes: {
        class: "profile-input",
    },
    settings: {
        witnInternalID: true
    },
});

const profileInputPhone = new ProfileInput("div", {
    heading: "Phone",
    name: "phone",
    type: "tel",
    value: "",
    disabled: true,
    attributes: {
        class: "profile-input profile-input--without-border",
    },
    settings: {
        witnInternalID: true
    },
});

const linkToEditProfile = new Link("a", {
    text: "Edit profile",
    attributes: {
        class: "profile__settings-link profile__settings-link--blue",
        href: routes.editProfile,
    },
    settings: {
        witnInternalID: true
    },
    events: {
        click: goToHref,
    }
});

const linkToChangePassword = new Link("a", {
    text: "Change password",
    attributes: {
        class: "profile__settings-link profile__settings-link--blue",
        href: routes.changePassword,
    },
    settings: {
        witnInternalID: true
    },
    events: {
        click: goToHref,
    }
});

const logoutLink = new Link("a", {
    text: "Log out",
    attributes: {
        class: "profile__settings-link profile__settings-link--red",
        href: '#',
    },
    settings: {
        witnInternalID: true
    },
    events: {
        click: (event: Event) => {
            event.preventDefault();

            authController.logout();
        },
    }
});

const avatarInput = new AvatarInput("label", {
    type: "file",
    name: "avatar",
    accept: "image/*",
    text: "Select file from your computer",
    id: "avatar-input",
    attributes: {
        class: "avatar-input__label",
        for: "avatar-input",
    },
    settings: {
        witnInternalID: true,
    }
});

const modalButton = new Button("button", {
    type: "submit",
    content: "Change avatar",
    attributes: {
        class: "button button--font-weight-500"
    },
    settings: {
        witnInternalID: true,
    }
})

const formForModal = new Form("form", {
    inputs: avatarInput,
    button: modalButton,
    attributes: {
        class: "modal-form"
    },
    events: {
        submit: (event) => {
            event.preventDefault();

            const form = event.target as HTMLFormElement;
            const formData = new FormData(form);

            for (const data of formData.entries()) {
                console.log(data[0], data[1]);
            }

            profileController.changeAvatar(formData);
            modal.element.classList.add("modal--hidden");
        }
    }
});

const modal = new Modal("div", {
    heading: "Upload the file",
    content: formForModal,
    attributes: {
        class: "modal modal--hidden",
    },
    events: {
        click: closeModal,
    },
    settings: {
        witnInternalID: true,
    }
});

const formForPage = new Form("form", {
    inputs: [profileInputEmail, profileInputLogin, profileInputFirstName, profileInputSecondName, profileInputDisplayName, profileInputPhone],
    contentLinks: [linkToEditProfile, linkToChangePassword, logoutLink],
    isProfileForm: true,
    attributes: {
        class: "profile-form profile__form",
    },
    settings: {
        witnInternalID: true,
    }
});

class ProfilePage<T extends object = TProfilePage> extends Block<T> {
    constructor(tagName = "main") {
        super(tagName, {
            profileHeader: profileHeader,
            form: formForPage,
            modal: modal,
            avatar: store.getState().user?.avatar,
            attributes: {
                class: "profile-wrapper",
            },
            events: {
                click: (event: Event) => {
                    const target = event.target as HTMLElement;

                    if (target.closest('.profile__avatar-wrapper')) {
                        modal.element.classList.remove("modal--hidden");
                    }
                }
            }
        });
    }

    public async componentDidMount() {
        clearInputs(this.element);
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
        return this._compile(profilePageTemplate, this.props);
    }
}

function mapStateToProps(state: Indexed) {
    return {
        avatar: state.user?.avatar,
        username: state.user?.first_name,
    }
}

export default connect(ProfilePage, mapStateToProps);
