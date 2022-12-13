export function scrollMessagesListToBottom() {
    const messagesList = document.querySelector(".current-chat__messages-list");
    const lastMessagesBlock = document.querySelector(".current-chat__day-messages:last-child");

    messagesList?.scrollBy({
        top: lastMessagesBlock?.scrollHeight,
    })
}
