import { ChatItem } from "../../components/chat-item/chat-item";
import { CurrentChat } from "../../components/current-chat/current-chat";
import { Modal } from "../../components/modal/modal";
import { ProfileBlock } from "../../components/profile-block";
import { SearchBlock } from "../../components/search-block/search-block";
import { SimpleModal } from "../../components/simple-modal/simple-modal";

export type TChatsPage = {
    profileBlock: typeof ProfileBlock;
    searchBlock: SearchBlock;
    chatItems: ChatItem[];
    attributes?: {
        class?: string;
    };
    currentChat?: CurrentChat;
    modalCreateChat: Modal;
    modalActions: SimpleModal;
    modalDeleteChat: Modal;
    modalAddUser: Modal;
    modalDeleteUser: Modal;
};
