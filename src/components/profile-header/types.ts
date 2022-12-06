import { Link } from "../link/link";

export type TProfileHeader = {
    link: Link;
    text: string;
    attributes?: {
        class: string;
    };
    settings?: {
        witnInternalID?: boolean;
    };
};
