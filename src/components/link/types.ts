export type TLink = {
    uppercase?: boolean;
    fontWeight?: string;
    text: string;
    marginTop?: string;
    attributes?: {
        class?: string;
        style?: string;
        href: string;
    };
    settings?: {
        witnInternalID?: boolean;
    };
};
