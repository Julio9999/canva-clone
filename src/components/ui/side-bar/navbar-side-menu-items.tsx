import { NavbarMainList } from './navbar-main-list'
import { NavbarSideBussiness } from './navbar-side-bussiness'
import { ShowTipes, useNavbarSide } from './navbar-side-context'
import { NavbarSideDesing } from './navbar-side-desing'
import { NavbarSideEducation } from './navbar-side-education'
import { NavbarSidePrices } from './navbar-side-prices'

export const NavbarSideMenuItems = () => {

    const { state } = useNavbarSide()

    return (
        <>
            {
                state().show == ShowTipes.list &&
                (<NavbarMainList />)
            }
            {
                state().show == ShowTipes.desing &&
                (<NavbarSideDesing />)
            }
            {
                state().show == ShowTipes.bussiness &&
                (<NavbarSideBussiness />)
            }
            {
                state().show == ShowTipes.education &&
                (<NavbarSideEducation />)
            }
            {
                state().show == ShowTipes.prices && 
                (<NavbarSidePrices />)
            }
        </>
    )
}
