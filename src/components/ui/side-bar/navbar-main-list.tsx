import { FaSolidChevronRight } from "solid-icons/fa"
import { ShowTipes, useNavbarSide } from "./navbar-side-context"

export const NavbarMainList = () => {

    const { setState } = useNavbarSide();

    return (
        <ul class="flex flex-col gap-6 px-6">
            <li
                class="flex items-center justify-between cursor-pointer"
                onClick={() => setState({ show: ShowTipes.desing })}
            >
                <span>Diseño</span>
                <FaSolidChevronRight />
            </li>
            <li
                class="flex items-center justify-between cursor-pointer"
                onClick={() => setState({ show: ShowTipes.bussiness })}
            >
                <span>Negocios</span>
                <FaSolidChevronRight />
            </li>
            <li
                class="flex items-center justify-between cursor-pointer"
                onClick={() => setState({ show: ShowTipes.education })}
            >
                <span>Educación</span>
                <FaSolidChevronRight />
            </li>
            <li
                class="flex items-center justify-between cursor-pointer"
                onClick={() => setState({show: ShowTipes.prices})}
            >
                <span>Planes y precios</span>
                <FaSolidChevronRight />
            </li>
           
        </ul>
    )
}
