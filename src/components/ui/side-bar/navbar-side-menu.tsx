import { Sheet, SheetContent, SheetTrigger } from "../sheet";
import { AiOutlineMenu } from 'solid-icons/ai';
import { Button } from "../button";
import { NavbarSideMenuItems } from "./navbar-side-menu-items";
import { NavbarSideProvider } from "./navbar-side-context";


export const NavbarSideMenu = () => {

    return (
        <Sheet>
            <SheetTrigger>
                <Button variant="outline" class="py-0 px-2 border-none shadow-none">
                    <AiOutlineMenu size={21} />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" class="pb-12 h-full px-0" closeButton={false}>
                <section class="flex flex-col justify-between h-full w-full">
                    <article>
                        <NavbarSideProvider>
                            <NavbarSideMenuItems />
                        </NavbarSideProvider>
                    </article>

                    <article class="w-full  flex flex-col gap-4 px-6">
                        <Button class="w-full">Registrarme</Button>
                        <Button class="w-full" variant="outline">Iniciar sesión</Button>
                    </article>
                </section>
            </SheetContent>
        </Sheet>
    )
}
