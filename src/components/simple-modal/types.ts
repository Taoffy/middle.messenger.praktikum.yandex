import { Button } from "../button/button"

/* eslint-disable no-unused-vars */
export type TSimpleModal = {
    content: Button[];
    attributes?: {
        class?: string;
    };
    settings?: {
        witnInternalID?: boolean;
    };
    events?: {
        [N:string]: (event: Event) => void;
    };
};
