import { Button } from "../button/button";
import { Form } from "../form/form";
import { Message } from "../message/message";

export type TCurrentChat = {
    form: Form;
    messages?: Message[];
    avatarSrc?: string;
    defaultSrc: string;
    title: string;
    actionsButton: Button;
    attributes?: {
        class?: string;
    };
};
