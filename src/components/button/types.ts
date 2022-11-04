export type TButton = {
    content?: string;
    uppercase?: boolean;
    lessPadding?: boolean;
    icon?: boolean;
    fontWeight?: number;
    type: string;
    attributes?: {
        class?: string;
    };
    settings?: {
        witnInternalID?: boolean;
    };
};
