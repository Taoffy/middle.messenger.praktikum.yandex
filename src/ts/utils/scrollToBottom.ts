export function scrollMessagesListToBottom() {
    console.log(1);
    const messagesList = document.querySelector(".current-chat__messages-list");
    const lastMessagesBlock = document.querySelector(".current-chat__day-messages:last-child");

    messagesList?.scrollTo({
        top: lastMessagesBlock?.scrollHeight,
        behavior: "smooth",
    })
}
