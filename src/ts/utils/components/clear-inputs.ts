export function clearInputs(element: HTMLElement) {
    const inputs = element.querySelectorAll('input');

    inputs.forEach(input => input.value = '');
}
