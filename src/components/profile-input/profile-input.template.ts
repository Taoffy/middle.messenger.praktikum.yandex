export const profileInputTemplate = `
<div class="profile-input__row">
    <span class="profile-input__heading">{{heading}}</span>
    <input class="profile-input__input" type="{{type}}" name="{{name}}" value="{{value}}" {{#if disabled}}disabled="{{disabled}}"{{/if}} />
</div>
{{#if error}}<span class="profile-input__error">{{error}}</span>{{/if}}
`;
