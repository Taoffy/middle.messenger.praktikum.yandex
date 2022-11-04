const chatPageTemplate = `
<div class="main-app__left-column">
    {{{profileBlock}}}
    {{{searchBlock}}}
    <ul class="main-app__chats-list">
        {{{chatItems}}}
    </ul>
</div>
<div class="chat">
    {{{chatHeader}}}
    <div class="chat__bottom-part">
        <span class="chat__date">Today</span>
        <ul class="chat__list">
            {{{messages}}}
        </ul>
        <form class="chat__message-form">
            {{{input}}}
            {{{button}}}
        </form>
    </div>
</div>
`;

export default chatPageTemplate;
