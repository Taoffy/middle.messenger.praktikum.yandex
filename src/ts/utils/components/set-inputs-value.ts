import { TUser } from "../../../types/common-types";

export function setInputsValue(element: HTMLElement, user: TUser) {
    const inputs = element.querySelectorAll('input');

    inputs.forEach(input => {
        if(input.name in user && input.type !== 'file') {
            input.value = user[input.name as keyof TUser] as string;
        }
    });
}
