import {Outlet} from 'react-router-dom'

import TopBar from "../topbar/topbar";
import NavBar from "../navbar/navbar";
import Footer from "../footer/footer";
import Brandlogo from '../brandlogo/brandlogo';

const Root = () => {

    return (
        <>
            <TopBar/>
            <NavBar/>
            <Outlet/>
            <Footer/>
            {/* <Brandlogo/> */}
        </>
    )

}

export default Root;