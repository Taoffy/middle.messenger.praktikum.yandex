export type TMessage = {
    isMyMessage?: boolean;
    text: string;
    time: number|string;
    attributes?: {
        class?: string;
    };
    settings?: {
        witnInternalID?: boolean;
    };
};
