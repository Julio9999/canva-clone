import { Carousel, CarouselContent, CarouselItem } from './carousel';
import { Index } from 'solid-js';
import apps from "@assets/apps.webp";
import desktop from "@assets/desktop.webp";
import presentations from "@assets/presentations.webp";
import video from "@assets/video.webp";
import education from "@assets/education.webp";
import print from "@assets/print.jpeg";
import sustainability from "@assets/sustainability.jpeg";
import nonprofits from "@assets/nonprofits.webp";
import diversity from "@assets/diversity.jpeg";


interface CarouselItems {
    img: ImageMetadata;
    title: string;
    description: string;
}
const carouselItems: CarouselItems[] = [
    {
        img: apps,
        title: 'Tenemos un Marketplace de apps',
        description: 'Accede a las funciones con IA más destacadas, descubre más contenido o integra Canva con las plataformas que ya tengas.'
    },
    {
        img: desktop,
        title: 'Tenemos una app para computadoras',
        description: 'Diseña y trabaja en equipo desde tu computadora, sin buscador, sin miles de pestañas y sin distracciones. ¡Descarga la app gratis!'
    },
    {
        img: presentations,
        title: 'Hacemos que dar presentaciones sea fácil',
        description: 'Olvídate del estrés que genera preparar y dar presentaciones con nuestras presentaciones de consulta.'
    },
    {
        img: video,
        title: 'Tenemos un editor de video',
        description: 'Crea y edita videos profesionales con animaciones y audios sencillos, y mucho más.'
    },
    {
        img: education,
        title: 'Es gratis para el salón de clases',
        description: 'Usa Canva para enseñar y aprender en persona, de forma remota o en modalidad híbrida. Docentes y estudiantes obtienen su propia versión gratuita de Canva.'
    },
    {
        img: print,
        title: 'Imprimimos pensando en el planeta',
        description: 'Cada vez que imprimes con Canva, plantamos un árbol. Además, todo nuestro embalaje es sustentable.'
    },
    {
        img: sustainability,
        title: 'Asumimos el compromiso con la sustentabilidad',
        description: 'Nuestras operaciones son neutras en carbono, y hacemos hincapié en la regeneración, la restauración de ecosistemas y el cuidado del planeta.'
    },
    {
        img: nonprofits,
        title: 'Gratis para ONG',
        description: 'Las ONG tienen su propia versión gratis de Canva para que puedan seguir contribuyendo al mundo. Hasta el momento, más de 500.000 ONG usan Canva.'
    },
    {
        img: diversity,
        title: 'Apoyamos la diversidad de voces',
        description: 'Conoce cómo apoyamos a creadores y creadoras diversos y les damos voz a culturas de todas partes del mundo.'
    }
]


export const SecondarySlider = () => {
    return (
        <Carousel class="w-full">
            <CarouselContent>
                <Index each={carouselItems}>
                    {(item, index) => (
                        <CarouselItem class="w-full rounded-lg ml-4  pl-0 max-w-xs  basis-auto text-center">
                            <div class="flex flex-col items-start justify-center w-full">
                                <img
                                    src={item().img.src}
                                    alt={item().title}
                                    width={300}
                                    height={300}
                                    class='w-full  rounded-lg'
                                />
                                <div class='py-2 w-full'>
                                    <h3 class="text-sm text-start font-semibold">{item().title}</h3>
                                    <p class='text-start text-xs leading-relaxed'>{item().description}</p>
                                </div>
                            </div>
                        </CarouselItem>
                    )}
                </Index>
            </CarouselContent>
        </Carousel>
    )
}
