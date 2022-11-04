import ProfileHeader from "../../components/profile-header/profile-header";
import ProfileInput from "../../components/profile-input/profile-input";

export type TProfilePage = {
    profileHeader: ProfileHeader;
    inputs: ProfileInput[];
    attributes?: {
        class?: string;
    }
};
