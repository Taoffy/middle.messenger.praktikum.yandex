import { Form } from "../../components/form/form";

export type TLoginPage = {
    form: Form;
    attributes?: {
        class?: string;
    };
    settings?: {
        witnInternalID?: boolean;
    };
};
