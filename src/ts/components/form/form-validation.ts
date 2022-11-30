import { inputValidation } from "../input/input-validation";

export const formValidation = (form: HTMLFormElement) => {

    const inputs = form.querySelectorAll('input');

    let isError: boolean|undefined;

    inputs.forEach(input => {
        inputValidation(input, isError);
    });
    
    return isError;
};
