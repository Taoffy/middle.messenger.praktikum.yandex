import { Form } from "../../components/form/form";
import { Modal } from "../../components/modal/modal";
import { ProfileHeader } from "../../components/profile-header/profile-header";

export type TProfilePage = {
    profileHeader: ProfileHeader;
    form: Form;
    modal: Modal;
    avatar: string;
    username?: string;
    attributes?: {
        class?: string;
    }
};
