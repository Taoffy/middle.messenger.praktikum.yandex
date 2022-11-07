export const chatItemTemplate = `
<div class="chat-item__left-part">
    {{{avatar}}}
    <div class="chat-item__text-block">
        <span class="chat-item__username">{{username}}</span>
        <span class="chat-item__text">{{lastMessage}}</span>
    </div>
</div>
<div class="chat-item__right-part"> 
    <span class="chat-item__text chat-item__text--without-margin">{{time}}</span>
    {{#if newMessages}}
    <div class="chat-item__new-messages">{{newMessages}}</div>
    {{/if}}
</div>
`;
