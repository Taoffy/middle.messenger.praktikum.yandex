export const chatItemTemplate = `
<div class="chat-item__left-part">
    <div class="avatar__wrapper avatar__wrapper--m">
        {{#if avatarSrc}}
        <img class="avatar" src="https://ya-praktikum.tech/api/v2/resources{{avatarSrc}}" alt="{{alt}}" />
        {{/if}}
        {{#unless avatarSrc}}
        <img class="avatar" src="{{defaultSrc}}" alt="{{alt}}" />
        {{/unless}}
    </div>
    <div class="chat-item__text-block">
        <span class="chat-item__username">{{title}}</span>
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
