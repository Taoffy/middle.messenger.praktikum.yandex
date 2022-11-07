import { Button } from "../button/button";
import { Input } from "../input/input";
import { ProfileInput } from "../profile-input/profile-input";
import { Link } from "../link/link";

export type TForm = {
    content?: string;
    button?: Button;
    inputs?: Input[]|ProfileInput[];
    link?: Link;
    attributes?: {
        class?: string;
    };
    events?: {
        [N:string]: (event: Event) => void;
    };
};
