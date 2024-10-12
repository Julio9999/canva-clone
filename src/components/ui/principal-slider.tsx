import { Index } from "solid-js"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel"
import posters_es_es_mobile from "@assets/slider-images/posters_es_es_mobile.avif";
import resumes_es_mx_mobile from "@assets/slider-images/resumes_es_mx_mobile.avif";
import logos_es_mx_mobile from "@assets/slider-images/logos_es_mx_mobile.avif";
import docs_es_la_mobile from "@assets/slider-images/docs_es_la_mobile.avif";
import whiteboards_es_co_mobile from "@assets/slider-images/whiteboards_es_co_mobile.avif";
import presentations_mobile_es_mx from "@assets/slider-images/presentations_mobile_es_mx.avif";
import social_es_la_mobile from "@assets/slider-images/social_es_la_mobile.avif";
import videos_en_au_mobile from "@assets/slider-images/videos_en_au_mobile.avif";
import prints_es_mx_mobile from "@assets/slider-images/prints_es_mx_mobile.avif";
import websites_es_co_mobile from "@assets/slider-images/websites_es_co_mobile.avif";
import ig_post_es_mx_mobile from "@assets/slider-images/ig_post_es_mx_mobile.avif";
import brochures_es_la_mobile from "@assets/slider-images/brochures_es_la_mobile.avif";
import photo_editor_en_au_mobile from "@assets/slider-images/photo_editor_en_au_mobile.avif";

interface CarouselItems {
	title: string;
	bg: string;
	img: ImageMetadata;
	textColor?: string;
}

const carouselItems: CarouselItems[] = 
[
	{
		title: 'Carteles', 
		bg: 'background:linear-gradient(180deg, #D4B8FF 0%, #B685FF 100%)',
		img: posters_es_es_mobile
	},
	{
		title: 'Currículums vitae', 
		bg: 'background:linear-gradient(180deg, #BAECED 0%, #71D9DB 100%)',
		img: resumes_es_mx_mobile
	},
	{
		title: 'Logos' , 
		bg: 'background:linear-gradient(180deg, #F5B5AE 0%, #EF8D81 100%)',
		img: logos_es_mx_mobile
	},
	{
		title: 'Docs' , 
		bg: 'background:linear-gradient(180deg, #00C4CC 0%, #0B8C9D 100%)',
		img: docs_es_la_mobile
	},
	{
		title: 'Pizarras online' , 
		bg: 'background:linear-gradient(180deg, #71CB8C 0%, #348E4F 100%)',
		img: whiteboards_es_co_mobile
	},
	{
		title: 'Presentaciones' , 
		bg: 'background:linear-gradient(180deg, #FFDA92 0%, #FFB82E 100%)',
		img: presentations_mobile_es_mx
	},
	{
		title: 'Redes sociales' , 
		bg: 'background:linear-gradient(180deg, #FF5055 0%, #EB0007 100%)',
		img: social_es_la_mobile,
		textColor: 'text-white'
	},
	{
		title: 'Videos' , 
		bg: 'background:linear-gradient(180deg, #F8B8FF 0%, #EF95E8 100%)',
		img: videos_en_au_mobile
	},
	{
		title: 'Impresiones' , 
		bg: 'background:linear-gradient(180deg, #D4B8FF 0%, #9752FF 100%)',
		img: prints_es_mx_mobile
	},
	{
		title: 'Sitios web' , 
		bg: 'background:linear-gradient(180deg, #271E9A 0%, #17125A 100%)',
		img: websites_es_co_mobile,
		textColor: 'text-white'
	},
	{
		title: 'Posts de Instagram' , 
		bg: 'background:linear-gradient(180deg, #F5B5AE 0%, #EF8D81 100%)',
		img: ig_post_es_mx_mobile
	},
	{
		title: 'Folletos', 
		bg: 'background:linear-gradient(180deg, #D4B8FF 0%, #B685FF 100%)',
		img: brochures_es_la_mobile
	},
	{
		title: 'Editor de fotos', 
		bg: 'background:linear-gradient(180deg, #F5B5AE 0%, #EF8D81 100%)',
		img: photo_editor_en_au_mobile
	},
]

export const PrincipalSlider = () => {
    return (
        <Carousel class="w-full">
			<CarouselContent>
				<Index each={carouselItems}>
					{(item, index) => (
						<CarouselItem style={item().bg} class="w-[144px] h-[184px] rounded-lg ml-4  pl-0  basis-auto text-center">
							<div class="h-[184px] w-full relative ">
								<span class={`absolute left-0 right-0 top-4 font-bold text-sm ${item().textColor ?? 'text-darkPrimary'}`}>{item().title}</span>
								<img src={item().img.src} class="w-full h-full rounded-lg"  />
							</div>
						</CarouselItem>
					)}
				</Index>
			</CarouselContent>
			{/* <CarouselPrevious /> */}
			{/* <CarouselNext /> */}
		</Carousel>
    )
}