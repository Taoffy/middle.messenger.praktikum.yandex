import Avatar from "../avatar/avatar";

export type TChatHeader = {
    username: string;
    avatar: Avatar;
    attributes?: {
        class?: string;
    };
    settings?: {
        witnInternalID?: boolean;
    };
};
