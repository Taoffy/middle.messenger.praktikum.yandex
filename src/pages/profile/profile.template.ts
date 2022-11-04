import emptyAvatar from "../../../static/img/empty-avatar.svg";
import addAvatar from "../../../static/img/add-photo.svg";

const profilePageTemplate = `
{{{profileHeader}}}
<div class="profile">
    <div class="profile__avatar-block">
        <div class="profile__avatar-wrapper">
            <img class="profile__avatar-empty" src="${emptyAvatar}" alt="empty avatar" />
            <img class="profile__avatar-add-photo" src="${addAvatar}" alt="Add photo" />
        </div>
        <input class="profile__avatar-input" type="file" name="avatar" accept="image/*" />
    </div>
    <h3 class="profile__username">Andrew</h3>
    <form class="profile-form profile__form">
        {{{inputs}}}
        <div class="profile__settings-links">
            <a class="profile__settings-link profile__settings-link--blue" href="#">Edit profile</a>
            <a class="profile__settings-link profile__settings-link--blue" href="#">Change password</a>
            <a class="profile__settings-link profile__settings-link--red" href="#">Log out</a>
        </div>
    </form>
</div>
`;

export default profilePageTemplate;
