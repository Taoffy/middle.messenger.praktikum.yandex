import { Form } from "../form/form";

/* eslint-disable no-unused-vars */
export type TModal = {
    heading?: string;
    content: Form | string;
    attributes?: {
        class: string;
    };
    settings?: {
        witnInternalID?: boolean;
        "data-modal"?: string;
    };
    events?: {
        [N:string]: (event: Event) => void;
    }
};
