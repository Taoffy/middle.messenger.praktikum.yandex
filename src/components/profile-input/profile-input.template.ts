const profileInputTemplate = `
<span class="profile-input__heading">{{heading}}</span>
<input class="profile-input__input" type="{{type}}" name="{{name}}" value="{{value}}" {{#if disabled}}disabled="{{disabled}}"{{/if}} />
`;

export default profileInputTemplate;
