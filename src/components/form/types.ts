import { Button } from "../button/button";
import { Input } from "../input/input";
import { ProfileInput } from "../profile-input/profile-input";
import { Link } from "../link/link";
import { AvatarInput } from "../avatar-input/avatar-input";

/* eslint-disable no-unused-vars */
export type TForm = {
    isProfileForm?: boolean;
    button?: Button;
    inputs?: Input[]|ProfileInput[]|AvatarInput;
    contentLinks?: Link[];
    link?: Link;
    attributes?: {
        class?: string;
    };
    events?: {
        [N:string]: (event: Event) => void;
    };
    settings?: {
        witnInternalID?: boolean;
    };
};
