import { router } from "../../../pages";

export function goToHref(event: Event) {
    event.preventDefault();
    const link = event.target as HTMLAnchorElement;

    router.go(link.getAttribute("href") as string);
}
