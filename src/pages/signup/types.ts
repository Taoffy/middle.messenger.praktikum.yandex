import Button from "../../components/button/button";
import Input from "../../components/input/input";
import Link from "../../components/link/link";

export type TSignupPage = {
    inputs: Input[];
    button: Button;
    link: Link;
    attributes?: {
        class?: string;
    }
};
