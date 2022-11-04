import inputValidation from "./input-validation";

const formSubmit = (event: Event) => {
    event.preventDefault();

    const formObject: {[N:string]: string} = {};
    const form = event.target as HTMLFormElement;

    form.querySelectorAll('input').forEach(input => {
        formObject[input.name] = input.value;
        inputValidation(input);
    });
    
    console.log(formObject);
};

export default formSubmit;
