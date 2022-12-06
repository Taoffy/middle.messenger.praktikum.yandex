export type TMessage = {
    text: string;
    time: number|string;
    attributes?: {
        class?: string;
    };
    settings?: {
        witnInternalID?: boolean;
    };
};
