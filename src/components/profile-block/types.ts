import { Button } from "../button/button";
import { Link } from "../link/link";

export type TProfileBlock = {
    username: string;
    link: Link;
    src?: string;
    defaultSrc: string;
    createButton: Button;
    attributes?: {
        class: string;
    };
    settings?: {
        witnInternalID?: boolean;
    };
};
