import { Button } from "../button/button"

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
