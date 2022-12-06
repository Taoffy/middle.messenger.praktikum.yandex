export const currentChatTemplate = `
<div class="current-chat__chat-header">
    <div class="current-chat__info">
        <div class="avatar__wrapper avatar__wrapper--s">
            {{#if avatarSrc}}
            <img class="avatar" src="https://ya-praktikum.tech/api/v2/resources{{avatarSrc}}" alt="{{alt}}" />
            {{/if}}
            {{#unless avatarSrc}}
            <img class="avatar" src="{{defaultSrc}}" alt="{{alt}}" />
            {{/unless}}
        </div>
        <div class="current-chat__text-content">
            <span class="current-chat__name">{{title}}</span>
            <span class="current-chat__time-online">Last seen recently</span>
        </div>
    </div>
    {{{actionsButton}}}
</div>
<div class="current-chat__bottom-part">
    <div class="current-chat__messages-list">
        <div class="current-chat__day-messages">
            <span class="current-chat__date">Today</span>
            {{{messages}}}
        </div>
    </div>
    {{{form}}}
</div>
`;
