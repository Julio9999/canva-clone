import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { AiOutlineMenu } from 'solid-icons/ai';
import { FaSolidChevronRight } from 'solid-icons/fa'
import { Button } from "./button";


export const NavbarSideMenu = () => {

    return (
        <Sheet>
            <SheetTrigger>
                <AiOutlineMenu size={21} />
            </SheetTrigger>
            <SheetContent side="left" class="py-12 h-full">
                <section class="flex flex-col justify-between h-full w-full">
                    <ul class="flex flex-col gap-4">
                        <li class="flex items-center justify-between">
                            <span>Diseño</span>
                            <FaSolidChevronRight />
                        </li>
                        <li class="flex items-center justify-between">
                            <span>Negocios</span>
                            <FaSolidChevronRight />
                        </li>
                        <li class="flex items-center justify-between">
                            <span>Educación</span>
                            <FaSolidChevronRight />
                        </li>
                        <li class="flex items-center justify-between">
                            <span>Planes y precios</span>
                            <FaSolidChevronRight />
                        </li>
                        <li class="flex items-center justify-between">
                            <span>Aprender</span>
                            <FaSolidChevronRight />
                        </li>
                    </ul>

                    <article class="w-full  flex flex-col gap-4">
                        <Button class="w-full">Registrarme</Button>
                        <Button class="w-full" variant="outline">Iniciar sesión</Button>
                    </article>
                </section>
            </SheetContent>
        </Sheet>
    )
}
