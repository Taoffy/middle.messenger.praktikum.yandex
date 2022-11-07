export const inputTemplate = `
<input class="input {{#if chat}}input--chat{{/if}}" {{#if chat}}placeholder="{{placeholder}}"{{/if}}  name="{{name}}" type="{{type}}" {{#if pattern}}pattern="{{pattern}}"{{/if}} />
{{#unless chat}}<span class="input__error">{{error}}</span>{{/unless}}
`;
