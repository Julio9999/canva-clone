import { Button } from '../button'
import { FaSolidChevronLeft } from 'solid-icons/fa'
import { Separator } from '../separator'
import { useNavbarSide } from './navbar-side-context'

export const NavbarSidePrices = () => {

    const { back } = useNavbarSide()


    return (
        <div class="flex  w-full flex-col gap-4 overflow-auto max-h-screen pb-12">
            <div class="flex px-6 w-full items-center gap-4" >
                <Button class="cursor-pointer border-none shadow-none rounded-full p-4" variant="outline" onClick={() => back()}>
                    <FaSolidChevronLeft size={15} />
                </Button>
                <span class="font-bold">Planes y precios</span>
            </div>
            <Separator />
            <ul class="px-4 flex flex-col gap-2">
                <li class="font-bold cursor-pointer p-2 hover:bg-liHover rounded-md">Documentos visuales</li>
                <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Suite Visual</li>
                <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Docs</li>
                <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Presentaciones</li>
                <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Pizarras online</li>
                <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Editor de PDF</li>
                <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Gráficas y diagramas</li>
            </ul>
            <Separator />
            <ul class="px-4 flex flex-col gap-2">
                <li class="font-bold cursor-pointer p-2 hover:bg-liHover rounded-md">Fotos y videos</li>
                <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Editor de video</li>
                <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Videos animados</li>
                <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Editor de fotografías</li>
                <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Collages de fotos</li>
            </ul>

            <Separator />
            <ul class="px-4 flex flex-col gap-2">
                <li class="font-bold cursor-pointer p-2 hover:bg-liHover rounded-md">Imprimir</li>
                <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Tarjetas de presentación</li>
                <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Tarjetas</li>
                <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Invitaciones</li>
                <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Tazas</li>
                <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Playeras</li>
                <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Sudaderas con capucha</li>
                <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Calendarios</li>
                <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Etiquetas</li>
                <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Ver todo</li>
            </ul>

            <Separator />
            <ul class="px-4 flex flex-col gap-2">
                <li class="font-bold cursor-pointer p-2 hover:bg-liHover rounded-md">Marketing</li>
                <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Logos</li>
                <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Carteles</li>
                <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Flyers</li>
                <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Folletos</li>
                <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Sitios web</li>
                <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Stickers</li>
                <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Generador de códigos QR</li>
            </ul>

            <Separator />
            <ul class="px-4 flex flex-col gap-2">
                <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Explora nuestras plantillas</li>
                <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Estudio Mágico</li>
            </ul>
            <Separator />

        </div>
    )
}
