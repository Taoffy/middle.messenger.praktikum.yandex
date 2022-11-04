import Button from "../../components/button/button";
import ProfileHeader from "../../components/profile-header/profile-header";
import ProfileInput from "../../components/profile-input/profile-input";

export type TEditProfilePage = {
    profileHeader: ProfileHeader;
    inputs: ProfileInput[];
    button: Button;
    attributes?: {
        class?: string;
    }
};
