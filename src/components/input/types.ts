/* eslint-disable */
export type TInput = {
    chat?: boolean;
    placeholder: string;
    name: string;
    type: string;
    pattern?: string;
    error?: string;
    attributes?: {
        class?: string;
        "data-content"?: string;
    };
    settings?: {
        witnInternalID?: boolean;
    };
    events?: {
        [N: string]: (event: Event) => void;
    };
};
