import { FaSolidChevronDown } from 'solid-icons/fa'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './accordion'

export const FooterAccordion = () => {

    return (
        <Accordion collapsible multiple class="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger class='font-bold text-base hover:underline-0'>Funciones</AccordionTrigger>
                <AccordionContent>
                    <ul class='flex flex-col gap-4'>
                        <li>Creador de texto en curva</li>
                        <li>Efectos fotográficos</li>
                        <li>Mejorar imagen</li>
                        <li>Añadir marcos</li>
                        <li>Añadir texto a las fotos</li>
                        <li>Grabar video online</li>
                        <li>Cortador de videos</li>
                        <li>Convertir videos a MP4</li>
                        <li>Mejorar imagen</li>
                        <li>Ver más funciones</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger class='font-bold text-base'>Explorar</AccordionTrigger>
                <AccordionContent>
                    <ul class='flex flex-col gap-4'>
                        <li>Ideas de diseño</li>
                        <li>Impresiones personalizadas</li>
                        <li>Combinar fuentes</li>
                        <li>Colores</li>
                        <li>Rueda de colores</li>
                        <li>Generador de paletas de colores</li>
                        <li>Blog</li>
                        <li>Apps</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger class='font-bold text-base'>Comunidad</AccordionTrigger>
                <AccordionContent>
                    <ul class='flex flex-col gap-4'>
                        <li>Comunidades online</li>
                        <li>Creators</li>
                        <li>Fondo Canva Representa</li>
                        <li>Desarrolladores</li>
                        <li>Asociaciones</li>
                        <li>Programa de afiliados</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
                <AccordionTrigger class='font-bold text-base'>Descargar</AccordionTrigger>
                <AccordionContent>
                    <ul class='flex flex-col gap-4'>
                        <li>iOS</li>
                        <li>Android</li>
                        <li>Windows</li>
                        <li>Mac</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
                <AccordionTrigger class='font-bold text-base'>Empresa</AccordionTrigger>
                <AccordionContent>
                    <ul class='flex flex-col gap-4'>
                        <li>Conócenos</li>
                        <li>Noticias</li>
                        <li>Trabaja con nosotros</li>
                        <li>Segundo paso</li>
                        <li>Sostenibilidad</li>
                        <li>Centro de confianza</li>
                        <li>Seguridad</li>
                        <li>Términos y Política de privacidad</li>
                        <li>Ponte en contacto con Ventas</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )

    {/* 
        return (
            <Accordion class='font-bold'>
                <AccordionItem class='flex justify-between mb-6 flex-col' value='item-1'>
                    <AccordionTrigger>
                        <span>Funciones</span>
                    </AccordionTrigger>
    
                    <AccordionContent>
                        <ul class='flex flex-col gap-4'>
                            <li>Creador de texto en curva</li>
                            <li>Efectos fotográficos</li>
                            <li>Mejorar imagen</li>
                            <li>Añadir marcos</li>
                            <li>Añadir texto a las fotos</li>
                            <li>Grabar video online</li>
                            <li>Cortador de videos</li>
                            <li>Convertir videos a MP4</li>
                            <li>Mejorar imagen</li>
                            <li>Ver más funciones</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
    
                <AccordionItem class='flex justify-between mb-6 flex-col' value='item-2'>
                    <AccordionTrigger>
                        <span>Funciones</span>
                    </AccordionTrigger>
    
                    <AccordionContent>
                        <ul class='flex flex-col gap-4'>
                            <li>Creador de texto en curva</li>
                            <li>Efectos fotográficos</li>
                            <li>Mejorar imagen</li>
                            <li>Añadir marcos</li>
                            <li>Añadir texto a las fotos</li>
                            <li>Grabar video online</li>
                            <li>Cortador de videos</li>
                            <li>Convertir videos a MP4</li>
                            <li>Mejorar imagen</li>
                            <li>Ver más funciones</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
    
                <li class='flex justify-between mb-6'>
                    <span>Explora</span>
                    <FaSolidChevronDown />
                </li>
    
                <li class='flex justify-between mb-6'>
                    <span>Comunidad</span>
                    <FaSolidChevronDown />
                </li>
    
                <li class='flex justify-between mb-6'>
                    <span>Descargar</span>
                    <FaSolidChevronDown />
                </li>
    
                <li class='flex justify-between mb-6'>
                    <span>Empresa</span>
                    <FaSolidChevronDown />
                </li>
            </Accordion>
        )
        */}



}
