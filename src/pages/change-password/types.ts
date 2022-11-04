import Button from "../../components/button/button"
import ProfileHeader from "../../components/profile-header/profile-header"
import ProfileInput from "../../components/profile-input/profile-input";

export type TChangePasswordPage = {
    inputs: ProfileInput[];
    profileHeader: ProfileHeader;
    button: Button;
    attributes?: {
        class?: string;
    }
};
