export type TInput = {
    chat?: boolean;
    placeholder: string;
    name: string;
    type: string;
    pattern?: string;
    attributes?: {
        class?: string;
        "data-content"?: string;
    };
    settings?: {
        witnInternalID?: boolean;
    };
};
