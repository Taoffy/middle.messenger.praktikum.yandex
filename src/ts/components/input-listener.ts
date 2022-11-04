import inputValidation from "./input-validation";

const inputListener = (event: Event) => {
    const input = event.target as HTMLInputElement;

    inputValidation(input);
};

export default inputListener;
