/* eslint-disable no-unused-vars */
export type TAvatarInput = {
    name: string;
    type: string;
    accept: string;
    text: string;
    id: string;
    attributes?: {
        class?: string;
        for?: string;
    };
    events?: {
        [N:string]: (event: Event) => void;
    };
    settings?: {
        witnInternalID?: boolean;
    };
};
