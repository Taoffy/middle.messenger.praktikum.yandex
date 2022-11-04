export type TProfileInput = {
    withoutBorder?: boolean;
    heading: string;
    type: string;
    name: string;
    value: string;
    disabled?: boolean;
    attributes?: {
        class?: string;
    };
    settings?: {
        witnInternalID?: boolean;
    };
};
