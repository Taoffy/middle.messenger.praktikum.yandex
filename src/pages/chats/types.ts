import { ChatItem } from "../../components/chat-item/chat-item";
import { ProfileBlock } from "../../components/profile-block/profile-block";
import { SearchBlock } from "../../components/search-block/search-block";

export type TChatsPage = {
    profileBlock: ProfileBlock;
    searchBlock: SearchBlock;
    chatItems: ChatItem[];
    attributes?: {
        class?: string;
    } 
};
