import Block from "./modules/Block/Block";

function render<T extends object>(query: string, block: Block<T>) {
    const root = document.querySelector(query);

    if (!root) {
        return;
    }

    root.append(block.getContent());

    return root;
}

export default render;
