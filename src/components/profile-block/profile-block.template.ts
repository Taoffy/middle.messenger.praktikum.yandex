export const profileBlockTemplate = `
<div class="profile-block__left-part">
    {{{avatar}}}
    <div class="profile-block__text-block">
        <span class="profile-block__username">{{username}}</span>
        <a class="profile-block__profile-link" href="{{profileLink}}">Profile</a>
    </div>
</div>
<div class="profile-block__right-part">
    <button class="profile-block__button">
        <img src="{{createImg}}" alt="create button" />
    </button>
</div>
`;
