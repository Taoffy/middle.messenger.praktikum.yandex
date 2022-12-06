import { Block } from "../../ts/modules/Block/Block";
import { ProfileBlock } from "../../components/profile-block";
import { SearchBlock } from "../../components/search-block/search-block";
import { Link } from "../../components/link/link";
import { Button } from "../../components/button/button";
import { Modal } from "../../components/modal/modal";
import { Form } from "../../components/form/form";
import { Input } from "../../components/input/input";
import { SimpleModal } from "../../components/simple-modal/simple-modal";

import { chatsPageTemplate } from "./chats.template";
import { TChatsPage } from "./types";
import { Indexed } from "../../types/common-types";
import { TCreateChat, TUsersDataForChat } from "../../controllers/types";

import { goToHref } from "../../ts/components/link/go-to-href";
import { makeChatItems } from "../../ts/utils/components/make-chat-items";
import { closeModal } from "../../ts/components/modal/close-modal";
import { formValidation } from "../../ts/components/form/form-validation";
import { getDataFromForm } from "../../ts/components/form/form-data-get";

import { connect } from "../../ts/common/connect";

import { AuthController } from "../../controllers/auth-controller";
import { ChatsController } from "../../controllers/chats-controller";

import { router } from "..";
import { routes } from "../../ts/utils/routes";

import { store } from "../../store/Store";

import "./chats.css";

import avatarImg from "../../../static/img/avatar.svg";
import searchImg from "../../../static/img/search-icon.svg";
import { clearInputs } from "../../ts/utils/components/clear-inputs";


const authController = new AuthController();
const chatsController = new ChatsController();

const link = new Link("a", {
    text: "Profile",
    attributes: {
        class: "profile-block__profile-link",
        href: routes.profile,
    },
    events: {
        click: goToHref,
    }
});

const createButton = new Button("button", {
    type: "button",
    content: `
    <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.8 9.73999V19.4C17.8 19.6757 17.7456 19.9488 17.6401 20.2036C17.5346 20.4584 17.3799 20.6899 17.1849 20.8849C16.9899 21.0799 16.7584 21.2346 16.5036 21.3401C16.2488 21.4456 15.9757 21.5 15.7 21.5H3.09999C2.54304 21.5 2.0089 21.2787 1.61507 20.8849C1.22125 20.4911 1 19.9569 1 19.4V6.8C1 6.24305 1.22125 5.7089 1.61507 5.31508C2.0089 4.92125 2.54304 4.7 3.09999 4.7H11.8927" stroke="#469BFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21.7869 0.77564C21.7102 0.691347 21.6172 0.623482 21.5135 0.576148C21.4098 0.528814 21.2976 0.502993 21.1837 0.500245C21.0698 0.497497 20.9564 0.517879 20.8506 0.56016C20.7448 0.602441 20.6486 0.665743 20.5679 0.74624L19.9185 1.39251C19.8398 1.47127 19.7955 1.57806 19.7955 1.6894C19.7955 1.80074 19.8398 1.90753 19.9185 1.98629L20.5138 2.58058C20.5528 2.61979 20.5992 2.6509 20.6503 2.67213C20.7014 2.69336 20.7562 2.70429 20.8115 2.70429C20.8668 2.70429 20.9216 2.69336 20.9727 2.67213C21.0238 2.6509 21.0701 2.61979 21.1092 2.58058L21.7423 1.95059C22.0626 1.63086 22.0925 1.11006 21.7869 0.77564ZM18.6054 2.70501L9.12817 12.1655C9.07071 12.2227 9.02895 12.2938 9.0069 12.3718L8.56852 13.6775C8.55802 13.7129 8.55728 13.7505 8.56637 13.7863C8.57546 13.8221 8.59405 13.8548 8.62018 13.881C8.64631 13.9071 8.67901 13.9257 8.71482 13.9348C8.75064 13.9439 8.78824 13.9431 8.82367 13.9326L10.1283 13.4943C10.2063 13.4722 10.2774 13.4304 10.3346 13.373L19.7951 3.89466C19.8826 3.80619 19.9317 3.68678 19.9317 3.56233C19.9317 3.43789 19.8826 3.31847 19.7951 3.23001L19.2727 2.70501C19.1841 2.61669 19.0642 2.56709 18.9391 2.56709C18.814 2.56709 18.694 2.61669 18.6054 2.70501Z" fill="#469BFF"/>
    </svg>`,
    attributes: {
        class: "profile-block__button",
    },
    events: {
        click: () => {
            modalCreateChat.element.classList.remove('modal--hidden');
        }
    }
});

const profileBlock = new ProfileBlock("div", {
    username: "A",
    defaultSrc: avatarImg,
    link: link,
    createButton: createButton,
    attributes: {
        class: "profile-block"
    },
    settings: {
        witnInternalID: true
    }
});

const searchBlock = new SearchBlock("div", {
    searchImg: searchImg,
    attributes: {
        class: "search-block"
    },
    settings: {
        witnInternalID: true
    }
});

const inputCreateChat = new Input("div", {
    type: "text",
    name: "title",
    error: "Title is required!",
    attributes: {
        class: "input__wrapper",
        "data-content": "TITLE"
    },
    settings: {
        witnInternalID: true
    }
});

const buttonCreateChat = new Button("button", {
    content: "Create",
    type: "submit",
    attributes: {
        class: "button button--font-weight-500"
    },
    settings: {
        witnInternalID: true,
    }
})

const modalCreateChatForm = new Form("form", {
    inputs: [inputCreateChat],
    button: buttonCreateChat,
    attributes: {
        class: "modal-form"
    },
    events: {
        submit: (event) => {
            event.preventDefault();

            const form = event.target as HTMLFormElement;
            const isFormError = formValidation(form);

            if (!isFormError) {
                const data = getDataFromForm(form);

                chatsController.createChat(data as TCreateChat).then(() => {
                    modalCreateChat.element.classList.add('modal--hidden');
                    clearInputs(form);
                })
                
            }
        }
    },
    settings: {
        witnInternalID: true
    }
});

const modalCreateChat = new Modal("div", {
    heading: "Create new chat",
    content: modalCreateChatForm,
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

const inputAddUser = new Input("div", {
    type: "text",
    name: "userId",
    error: "User id is required!",
    attributes: {
        class: "input__wrapper",
        "data-content": "USER ID"
    },
    settings: {
        witnInternalID: true
    }
});

const buttonAddUser = new Button("button", {
    content: "Add user",
    type: "submit",
    attributes: {
        class: "button button--font-weight-500"
    },
    settings: {
        witnInternalID: true,
    }
})

const modalAddUserForm = new Form("form", {
    inputs: [inputAddUser],
    button: buttonAddUser,
    attributes: {
        class: "modal-form"
    },
    events: {
        submit: (event) => {
            event.preventDefault();

            const form = event.target as HTMLFormElement;
            const isFormError = formValidation(form);

            if (!isFormError) {
                const data = {} as TUsersDataForChat;
                const inputValue = Number(form.querySelector('input')?.value);
                data.users = [inputValue];
                data.chatId = store.getState().currentChatId;

                chatsController.addUserToChat(data).then(() => {
                    modalAddUser.element.classList.add('modal--hidden');
                    clearInputs(form);
                });
                
            }
        }
    },
    settings: {
        witnInternalID: true
  }
});

const modalAddUser = new Modal("div", {
    heading: "Add user to chat",
    content: modalAddUserForm,
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

const inputDeleteUser = new Input("div", {
  type: "text",
  name: "userId",
  error: "User id is required!",
  attributes: {
      class: "input__wrapper",
      "data-content": "USER ID"
  },
  settings: {
      witnInternalID: true
  }
});

const buttonDeleteUser = new Button("button", {
  content: "Delete user",
  type: "submit",
  attributes: {
      class: "button button--font-weight-500"
  },
  settings: {
      witnInternalID: true,
  }
})

const modalDeleteUserForm = new Form("form", {
  inputs: [inputDeleteUser],
  button: buttonDeleteUser,
  attributes: {
      class: "modal-form"
  },
  events: {
      submit: (event) => {
          event.preventDefault();

          const form = event.target as HTMLFormElement;
          const isFormError = formValidation(form);

          if (!isFormError) {
              const data = {} as TUsersDataForChat;
              const inputValue = Number(form.querySelector('input')?.value);
              data.users = [inputValue];
              data.chatId = store.getState().currentChatId;

              chatsController.deleteUserFromChat(data).then(() => {
                  modalAddUser.element.classList.add('modal--hidden');
                  clearInputs(form);
              });
              
          }
      }
  },
  settings: {
      witnInternalID: true
}
});

const modalDeleteUser = new Modal("div", {
    heading: "Delete user from chat",
    content: modalDeleteUserForm,
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

const addUserToChatButton = new Button("button", {
    type: "button",
    content: '<span style="margin-left: 15px;">Add user to chat</span>',
    icon: `
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="10.9999" y1="5.5" x2="10.9999" y2="16.5" stroke="#469BFF" stroke-width="1.5" />
        <line x1="5.49988" y1="11" x2="16.4999" y2="11" stroke="#469BFF" stroke-width="1.5" />
        <circle cx="11" cy="11" r="10.25" stroke="#469BFF" stroke-width="1.5" />
    </svg>
    `,
    attributes: {
        class: "button button--actions"
    },
    settings: {
        witnInternalID: true
    },
    events: {
        click: () => {
            modalAddUser.element.classList.remove("modal--hidden");
            modalActions.element.classList.add("simple-modal--hidden");
        }
    }
});

const deleteUserToChatButton = new Button("button", {
    type: "button",
    content: '<span style="margin-left: 15px;">Delete user from chat</span>',
    icon: `
    <svg style="transform: rotate(45deg)" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="10.9999" y1="5.5" x2="10.9999" y2="16.5" stroke="#469BFF" stroke-width="1.5" />
        <line x1="5.49988" y1="11" x2="16.4999" y2="11" stroke="#469BFF" stroke-width="1.5" />
        <circle cx="11" cy="11" r="10.25" stroke="#469BFF" stroke-width="1.5" />
    </svg>
    `,
    attributes: {
        class: "button button--actions"
    },
    settings: {
        witnInternalID: true
    },
    events: {
        click: () => {
            modalDeleteUser.element.classList.remove("modal--hidden");
            modalActions.element.classList.add("simple-modal--hidden");
        }
    }
});

const deleteChatButton = new Button("button", {
    type: "button",
    content: '<span style="margin-left: 15px;">Delete chat</span>',
    icon: `
    <svg style="transform: rotate(45deg)" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="10.9999" y1="5.5" x2="10.9999" y2="16.5" stroke="#469BFF" stroke-width="1.5" />
        <line x1="5.49988" y1="11" x2="16.4999" y2="11" stroke="#469BFF" stroke-width="1.5" />
        <circle cx="11" cy="11" r="10.25" stroke="#469BFF" stroke-width="1.5" />
    </svg>
    `,
    attributes: {
        class: "button button--actions"
    },
    settings: {
        witnInternalID: true
    },
    events: {
        click: () => {
            const chatId = store.getState().currentChatId;
            const data = { chatId: chatId };
            chatsController.deleteChat(data);
            modalActions.element.classList.add('simple-modal--hidden');
        }
    }
});

const modalActions = new SimpleModal("div", {
    content: [addUserToChatButton, deleteUserToChatButton, deleteChatButton],
    attributes: {
        class: "chats__modal-actions simple-modal simple-modal--hidden"
    },
    settings: {
        witnInternalID: true
    }
});

class ChatsPage<T extends object = TChatsPage> extends Block<T> {
    constructor(tagName = "main") {
        super(tagName, {
            profileBlock: profileBlock,
            searchBlock: searchBlock,
            chatItems: [],
            modalCreateChat: modalCreateChat,
            modalActions: modalActions,
            modalAddUser: modalAddUser,
            modalDeleteUser: modalDeleteUser,
            attributes: {
               class: "main-app"
            }
        });

        authController.getUserData();
        
    }

    public async componentDidMount() {
        if (!store.getState().isAuth) {
            await authController.getUserData();

            const isAuth = store.getState().isAuth;

            if(isAuth) {
                chatsController.getChats();
            } else {
                router.go(routes.login);
            }
        } else {
            chatsController.getChats();
        }  
    }

    render(): DocumentFragment {
        return this._compile(chatsPageTemplate, this.props);
    }
}

function mapStateToProps(state: Indexed): Indexed {
    return {
        chatItems: makeChatItems(state.chats),
        currentChat: state?.currentChat,
    }
}

export default connect(ChatsPage, mapStateToProps);
