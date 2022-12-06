import emptyAvatar from "../../../static/img/empty-avatar.svg";
import addAvatar from "../../../static/img/add-photo.svg";

export const profilePageTemplate = `
{{{profileHeader}}}
<div class="profile">
    <div class="profile__avatar-block">
        {{#if avatar}}
        <div class="profile__avatar-wrapper profile__avatar-wrapper--without-padding">
            <img class="profile__avatar" src="https://ya-praktikum.tech/api/v2/resources{{avatar}}" alt="avatar" />
        </div>
        {{/if}}
        {{#unless avatar}}
        <div class="profile__avatar-wrapper">
            <img class="profile__empty-avatar" src="${emptyAvatar}" alt="empty avatar" />
            <img class="profile__avatar-add-photo" src="${addAvatar}" alt="Add photo" />
        </div>
        {{/unless}}
    </div>
    <h3 class="profile__username">{{username}}</h3>
    {{{form}}}
</div>
{{{modal}}}
`;
