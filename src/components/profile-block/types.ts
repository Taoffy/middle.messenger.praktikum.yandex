import { Avatar } from "../avatar/avatar";

export type TProfileBlock = {
    username: string;
    profileLink: string;
    avatar: Avatar;
    createImg: string;
    attributes?: {
        class: string;
    };
    settings?: {
        witnInternalID?: boolean;
    };
};
