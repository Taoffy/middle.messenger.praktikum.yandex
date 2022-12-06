export type TButton = {
    content?: string;
    icon?: string;
    type: string;
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
