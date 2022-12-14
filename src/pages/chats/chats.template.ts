export const chatsPageTemplate = `
<div class="main-app__left-column">
    {{{profileBlock}}}
    {{{searchBlock}}}
    <ul class="main-app__chats-list">
        {{{chatItems}}}
    </ul>
</div>
{{{currentChat}}}
{{{modalCreateChat}}}
{{{modalActions}}}
{{{modalDeleteChat}}}
{{{modalAddUser}}}
{{{modalDeleteUser}}}
`;
