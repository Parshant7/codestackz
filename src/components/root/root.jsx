import {Outlet} from 'react-router-dom'

import TopBar from "../topbar/topbar";
import NavBar from "../navbar/navbar";
import Footer from "../footer/footer";

const Root = () => {

    return (
        <>
            <TopBar/>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </>
    )

}

export default Root;