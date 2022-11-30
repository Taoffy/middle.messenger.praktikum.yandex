export function closeModal(event: Event) {
    const target = event.target as HTMLElement;

    if (!target.closest(".modal__window")) {
        target.classList.add("modal--hidden");
    }
}
