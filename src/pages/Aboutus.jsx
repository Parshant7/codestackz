
import AboutusCarousel from "../components/aboutuscarousel/aboutuscarousel";
import AboutusTeam from "../components/aboutusteam/aboutusteam";
import Chooseus from "../components/chooseus/chooseus";
import Technologies from "../components/technologies/technologies";
import TabTitle from './generalFunctions'

const Aboutus = () => {

    TabTitle("About Us | codestackz.in")    ;

    return (
        <>
            
            <AboutusCarousel/>
            <Chooseus/>
            <Technologies/>
            <AboutusTeam/>
        </>
    )
}

export default Aboutus;