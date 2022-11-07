import { Block } from "./modules/Block/Block";

export function render<T extends object>(query: string, block: Block<T>) {
    const root = document.querySelector(query);

    if (!root) {
        return;
    }

    root.innerHTML = "";
    root.append(block.getContent());

    return root;
}
