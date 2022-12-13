/* eslint-disable no-unused-vars */
export type TChatItem = {
    avatarSrc?: string;
    defaultSrc: string;
    title: string;
    lastMessage: string;
    time: number|string;
    newMessages?: number;
    attributes?: {
        class: string;
    };
    settings?: {
        witnInternalID?: boolean;
    };
    events?: {
        [N:string]: (event: Event) => void
    };
};
