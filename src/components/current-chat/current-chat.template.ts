export const currentChatTemplate = `
<div class="current-chat__chat-header">
    <div class="current-chat__info">
        <div class="avatar__wrapper avatar__wrapper--s">
            {{#if avatarSrc}}
            <img class="avatar" src="{{avatarSrc}}" alt="{{alt}}" />
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
    <span class="current-chat__date">Today</span>
    <ul class="current-chat__list">
        {{{messages}}}
    </ul>
    {{{form}}}
</div>
`;
