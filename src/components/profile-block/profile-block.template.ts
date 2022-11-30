export const profileBlockTemplate = `
<div class="profile-block__left-part">
    <div class="avatar__wrapper avatar__wrapper--s">
        {{#if src}}
        <img class="avatar" src="{{src}}" alt="{{alt}}" />
        {{/if}}
        {{#unless src}}
        <img class="avatar" src="{{defaultSrc}}" alt="{{alt}}" />
        {{/unless}}
    </div>
    <div class="profile-block__text-block">
        <span class="profile-block__username">{{username}}</span>
        {{{link}}}
    </div>
</div>
<div class="profile-block__right-part">
    {{{createButton}}}
</div>
`;
