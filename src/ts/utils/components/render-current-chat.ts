import { Button } from "../../../components/button/button";
import { Form } from "../../../components/form/form";
import { Input } from "../../../components/input/input";
import {CurrentChat } from "../../../components/current-chat/current-chat";

import { inputListener } from "../../components/input/input-listener";
import { closeSimpleModal } from "../../components/simple-modal/close-simple-modal";
import { formValidation } from "../../../ts/components/form/form-validation";
import { clearInputs } from "./clear-inputs";

import { websocket } from "../../modules/ChatWebsocket/ChatWebsocket";

import { store } from "../../../store/Store";

import avatarImg from "../../../../static/img/avatar.svg";

export function renderCurrentChat(title: string, chatId: number) {
    const input = new Input("div", {
        placeholder: "Write a message...",
        name: "message",
        type: "text",
        chat: true,
        attributes: {
            class: "input__wrapper input__wrapper--chat",
        },
        settings: {
            witnInternalID: true
        },
        events: {
            blur: inputListener,
            focus: inputListener,
        }
    });

    const messageButton = new Button("button", {
        type: "submit",
        content: `
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 14.833V3.16634" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4 8.16699L9 3.16699L14 8.16699" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`,
        attributes: {
            class: "button button--icon current-chat__button"
        },
        settings: {
            witnInternalID: true
        }
    });

    const actionsButton = new Button("button", {
        type: "button",
        content: `
        <svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="1.5" cy="2" r="1.5" fill="#1E1E1E"/>
            <circle cx="1.5" cy="8" r="1.5" fill="#1E1E1E"/>
            <circle cx="1.5" cy="14" r="1.5" fill="#1E1E1E"/>
        </svg>`,
        attributes: {
            class: "button button--add-chat"
        },
        events: {
            click: (event) => {
                event.stopPropagation();
                const modalActions = document.querySelector(".simple-modal");

                modalActions?.classList.remove("simple-modal--hidden");
                document.addEventListener("click", closeSimpleModal);
            }
        },
        settings: {
            witnInternalID: true
        }
    });

    const form = new Form("form", {
        inputs: [input],
        button: messageButton,
        attributes: {
            class: "current-chat__message-form"
        },
        events: {
            submit: (event: Event) => {
                event.preventDefault();

                const form = event.target as HTMLFormElement;
                const isFormError = formValidation(form);

                if (!isFormError) {
                    const inputValue = (event.target as HTMLFormElement).querySelector("input")?.value;
                    websocket.sendMessage(inputValue as string);
                    clearInputs(form);
                }   
            },
        }
    });

    const currentChat = new CurrentChat("div", {
        actionsButton: actionsButton,
        form: form,
        defaultSrc: avatarImg,
        title: title,
        attributes: {
            class: "current-chat",
        },
    });
    
    store.set("currentChat", currentChat);
    store.set("currentChatId", chatId);
}
