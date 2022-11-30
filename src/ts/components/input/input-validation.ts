import { validationPatterns } from "../../validation-patterns";

export const inputValidation = (input: HTMLInputElement, isError?: boolean|undefined) => {
    const inputName = input.name;
    const isProfileInput = input.parentElement?.parentElement?.classList.contains('profile-input');

    isError = false;

    switch(inputName) {
        case "first_name":
        case "second_name": {
            const isValid = validationPatterns.namesPattern.test(input.value);

            if (isValid) {
                isProfileInput ? input.parentElement?.parentElement?.classList.remove('profile-input--error') : input.parentElement?.classList.remove('input__wrapper--error');
            } else {
              isProfileInput ? input.parentElement?.parentElement?.classList.add('profile-input--error') : input.parentElement?.classList.add('input__wrapper--error');
              isError = true;
            }
            break;
        }

        case "login": {
            const isValid = validationPatterns.loginPattern.test(input.value);

            if (isValid) {
                isProfileInput ? input.parentElement?.parentElement?.classList.remove('profile-input--error') : input.parentElement?.classList.remove('input__wrapper--error');
            } else {
                isProfileInput ? input.parentElement?.parentElement?.classList.add('profile-input--error') : input.parentElement?.classList.add('input__wrapper--error');
                isError = true;
            }
            break;
        }

        case "email": {
            const isValid = validationPatterns.emailPattern.test(input.value);

            if (isValid) {
                isProfileInput ? input.parentElement?.parentElement?.classList.remove('profile-input--error') : input.parentElement?.classList.remove('input__wrapper--error');
            } else {
                isProfileInput ? input.parentElement?.parentElement?.classList.add('profile-input--error') : input.parentElement?.classList.add('input__wrapper--error');
                isError = true;
            }
            break;
        }

        case "password":
        case "newPassword":
        case "newPassword-2":
        case "oldPassword": {
            const isValid = validationPatterns.passwordPattern.test(input.value);

            if (isValid) {
                isProfileInput ? input.parentElement?.parentElement?.classList.remove('profile-input--error') : input.parentElement?.classList.remove('input__wrapper--error');
            } else {
                isProfileInput ? input.parentElement?.parentElement?.classList.add('profile-input--error') : input.parentElement?.classList.add('input__wrapper--error');
                isError = true;
            }
            break;
        }

        case "phone": {
            const isValid = validationPatterns.phonePattern.test(input.value);

            if (isValid) {
                isProfileInput ? input.parentElement?.parentElement?.classList.remove('profile-input--error') : input.parentElement?.classList.remove('input__wrapper--error');
            } else {
                isProfileInput ? input.parentElement?.parentElement?.classList.add('profile-input--error') : input.parentElement?.classList.add('input__wrapper--error');
                isError = true;
            }
            break;
        }

        case "message":
        case "title": {
            const isValid = input.value.length !== 0;

            if (isValid) {
                isProfileInput ? input.parentElement?.parentElement?.classList.remove('profile-input--error') : input.parentElement?.classList.remove('input__wrapper--error');
            } else {
                isProfileInput ? input.parentElement?.parentElement?.classList.add('profile-input--error') : input.parentElement?.classList.add('input__wrapper--error');
                isError = true;
            }
            break;
        }
    }

    return isError;
};
