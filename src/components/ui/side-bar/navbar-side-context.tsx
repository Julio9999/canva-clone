import { createContext, createSignal, useContext, type Accessor, type JSXElement, type Setter } from "solid-js";

export enum ShowTipes  {
    list = "list",
    desing = "desing",
    bussiness = "bussiness",
    education = "education",
    prices = "prices",
}

interface NavbarSideContextState {
    show: ShowTipes;
}

interface NavbarSideContextValue {
    state: Accessor<NavbarSideContextState>;
    setState: Setter<NavbarSideContextState>;
    back: () => void
}

interface Props {
    children: JSXElement;
}

export const NavbarSideContext = createContext<NavbarSideContextValue>();

export const NavbarSideProvider = (props: Props) => {
    const [state, setState] = createSignal<NavbarSideContextState>({
        show: ShowTipes.list
    });

    const back = () => {
        setState({show: ShowTipes.list})
    }

    return (
        <NavbarSideContext.Provider value={{ state, setState, back }}>
            {props.children}
        </NavbarSideContext.Provider>
    );
};

export const useNavbarSide = () => {
    const context = useContext(NavbarSideContext);
    if (!context) throw new Error("useNavbarSide debe usarse dentro de un NavbarSideProvider");
    return context;
};
