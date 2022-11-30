export function getDataFromForm(form: HTMLFormElement, isPassword?: boolean) {
    const inputs = form.querySelectorAll("input");
    const dataObject: {[N:string]: string} = {};

    inputs.forEach(input => {
        if (isPassword && input.name === "newPassword-2") {
            return;
        }

        dataObject[input.name] = input.value;
    });

    return dataObject;
}
