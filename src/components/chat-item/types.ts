import Avatar from "../avatar/avatar"

export type TChatItem = {
    avatar: Avatar;
    username: string;
    lastMessage: string;
    time: number|string;
    newMessages?: number;
    attributes?: {
        class: string;
    };
    settings?: {
        witnInternalID?: boolean;
    };
};
