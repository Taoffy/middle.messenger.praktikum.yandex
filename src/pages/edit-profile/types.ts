import { Form } from "../../components/form/form";
import { ProfileHeader } from "../../components/profile-header/profile-header";

export type TEditProfilePage = {
    profileHeader: ProfileHeader;
    form: Form;
    attributes?: {
        class?: string;
    }
};
