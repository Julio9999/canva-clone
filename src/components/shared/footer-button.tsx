import { createEffect, createSignal, onCleanup } from "solid-js";
import { Button } from "../ui/button"
import { cn } from "@/libs/cn";

export const FooterButton = () => {

    const [show, setShow] = createSignal(false)

    createEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 600) {
                setShow(() => true)
            } else {
                setShow(() => false)
            }

        };

        window.addEventListener("scroll", handleScroll);

        onCleanup(() => window.removeEventListener("scroll", handleScroll));
    });

    return (
        <>
            {
                <div
                    class={
                        cn("border z-50 -bottom-10 fixed bg-white w-full p-3 text-center transition-all", {
                            "bottom-0": show()
                        })
                    }
                >
                    <Button>Quiero diseñar</Button>
                </div>
            }
        </>
    )
}
