import { FaSolidChevronLeft } from "solid-icons/fa"
import { Button } from "../button"
import { useNavbarSide } from "./navbar-side-context"
import { Separator } from "../separator"

export const NavbarSideBussiness = () => {

  const { back } = useNavbarSide()

  return (
    <div class="flex  w-full flex-col gap-4 overflow-auto max-h-screen pb-12">
      <div class="flex px-6 w-full items-center gap-4" >
        <Button class="cursor-pointer border-none shadow-none rounded-full p-4"  variant="outline" onClick={() => back()}>
          <FaSolidChevronLeft size={15}  />
        </Button>
        <span class="font-bold">Negocios</span>
      </div>
      <Separator />
      <ul class="px-4 flex flex-col gap-2">
        <li class="font-bold cursor-pointer p-2 hover:bg-liHover rounded-md">Canva for Business</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Creación de contenido</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Comunicación visual</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Gestión de la marca</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Trabajo en equipo</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Planifica y programa contenido</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Administración de recursos</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Lluvias de ideas y talleres</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Plantillas de marca del equipo</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Productividad y flujos de trabajo</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Ver todo</li>
      </ul>
      <Separator />

      <ul class="px-4 flex flex-col gap-2">
        <li class="font-bold cursor-pointer p-2 hover:bg-liHover rounded-md">Soluciones</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Marketing</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Equipos creativos</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Agencias</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Profesionales de ventas</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Comunicaciones</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Medios y editoriales</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Emprendimientos</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Inmobiliarias</li>
      </ul>
      <Separator />

      <ul class="px-4 flex flex-col gap-2">
        <li class="font-bold cursor-pointer p-2 hover:bg-liHover rounded-md">Soluciones</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Marketing</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Equipos creativos</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Agencias</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Profesionales de ventas</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Comunicaciones</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Medios y editoriales</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Emprendimientos</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Inmobiliarias</li>
      </ul>
      <Separator />

      <ul class="px-4 flex flex-col gap-2">
        <li class="font-bold cursor-pointer p-2 hover:bg-liHover rounded-md">Soluciones</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Marketing</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Equipos creativos</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Agencias</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Profesionales de ventas</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Comunicaciones</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Medios y editoriales</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Emprendimientos</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Inmobiliarias</li>
      </ul>
      <Separator />

      <ul class="px-4 flex flex-col gap-2">
        <li class="font-bold cursor-pointer p-2 hover:bg-liHover rounded-md">Soluciones</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Marketing</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Equipos creativos</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Agencias</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Profesionales de ventas</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Comunicaciones</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Medios y editoriales</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Emprendimientos</li>
        <li class="text-sm cursor-pointer p-2 hover:bg-liHover rounded-md">Inmobiliarias</li>
      </ul>
      <Separator />
      

    </div>
  )
}
