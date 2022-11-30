export const formTemplate = `
{{{inputs}}}
{{{button}}}
{{{link}}}
{{#if isProfileForm}}
<div class="profile__settings-links">
  {{{contentLinks}}}
</div>
{{/if}}
`;
