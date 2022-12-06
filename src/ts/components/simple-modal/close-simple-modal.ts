export function closeSimpleModal(event: Event) {
    const target = event.target as HTMLElement;

    if(!target.closest(".simple-modal")) {
        document.querySelector(".simple-modal")?.classList.add("simple-modal--hidden");
        document.removeEventListener("click", closeSimpleModal);
    }
}
