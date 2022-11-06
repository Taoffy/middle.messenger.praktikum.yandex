import { inputValidation } from "./input-validation";

export const inputListener = (event: Event) => {
    const element = event.target as HTMLElement;

    if (element instanceof HTMLInputElement) {
        inputValidation(element);
    }
};
