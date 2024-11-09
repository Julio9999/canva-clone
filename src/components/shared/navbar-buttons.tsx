import { Button } from "../ui/button";
import { createSignal, onCleanup } from "solid-js";

function useMediaQuery(query: string) {
    const mediaQuery = window.matchMedia(query);
    const [matches, setMatches] = createSignal(mediaQuery.matches);

    const updateMatches = () => setMatches(mediaQuery.matches);

    mediaQuery.addEventListener("change", updateMatches);

    onCleanup(() => mediaQuery.removeEventListener("change", updateMatches));

    return matches;
}

export const NavbarButtons = () => {

    const isMobile = useMediaQuery("(max-width: 768px)");


    return (
        <>
            <Button class="font-semibold" variant={isMobile() ? "default": "outline"}>
                Iniciar sesión
            </Button>

            <Button class="hidden md:flex font-semibold">
                Registrarme
            </Button>
        </>
    )
}
