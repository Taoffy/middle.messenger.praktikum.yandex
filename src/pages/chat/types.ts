import { ChatHeader } from "../../components/chat-header/chat-header";
import { ChatItem } from "../../components/chat-item/chat-item";
import { Form } from "../../components/form/form";
import { Message } from "../../components/message/message";
import { ProfileBlock } from "../../components/profile-block/profile-block";
import { SearchBlock } from "../../components/search-block/search-block";

export type TChatPage = {
    profileBlock: ProfileBlock;
    searchBlock: SearchBlock;
    chatItems: ChatItem[];
    chatHeader: ChatHeader;
    messages: Message[];
    form: Form;
    attributes?: {
        class?: string;
    };
    settings?: {
        witnInternalID?: boolean;
    }
};
