import { Form } from "../../components/form/form";
import { ProfileHeader } from "../../components/profile-header/profile-header";

export type TChangePasswordPage = {
    profileHeader: ProfileHeader;
    form: Form;
    attributes?: {
        class?: string;
    }
};
