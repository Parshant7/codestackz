import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'


import './footer.css'
import cszlogo from '/images/cszlogo.png'
const Footer = () => {

    useEffect(()=>{
        AOS.init({duration:1000,once:"true"});
    })

    return (
        <>
            <div>
                <div className="row p-5 footerMain" data-aos="fade-up">
                    <div className="col-sm-6 col-md-3 mb-3 mb-md-0">
                        <div className='mx-auto footerDivsCenter'>
                            <span className="h5">CodeStackZ</span>
                            <ul style={{ padding: "10px 20px" }}>
                                <li>Home</li>
                                <li>Link</li>
                                <li>Home</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-3 mb-md-0">
                        <div className='mx-auto footerDivsCenter' >

                            <span className="h5">Web Development</span>
                            <ul className='' style={{ padding: "10px 20px" }}>
                                <li>Custom Web</li>
                                <li>NodeJs</li>
                                <li>ReactJs</li>
                                <li>More</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-3 mb-md-0">
                        <div className='mx-auto footerDivsCenter'>

                            <span className="h5">Mobile App Development </span>
                            <ul style={{ padding: "10px 20px" }}>
                                <li>Android App</li>
                                <li>iOS App</li>
                                <li>Hybrid App</li>
                                <li>React Native</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-3 mb-md-0">
                        <div className='mx-auto footerDivsCenter' >

                            <span className="h5">Contact Us</span>
                            <ul style={{ padding: "10px 20px" }}>
                                <li><a href="tel:123456789" style={{ textDecoration: "none", color: "black" }}>888 7777 555</a></li>
                                <li><a href="mailto:info@codestackz.in" style={{ textDecoration: "none", color: "black" }}>info@codestackz.in</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row footerBottom ">
                    <div className="col d-flex align-items-center justify-content-between">
                        <div className="">
                            <img src={cszlogo} style={{ width: "40px", height: "40px", marginRight: "5px" }}></img>
                            <i className="fa-regular fa-copyright" style={{ color: "#000000" }}></i> <span className='fw-bold'>2024 Codestackz</span>
                        </div>
                        <div className="float-end">
                            <i className="fa-brands fa-instagram fs-3 fw-bold me-3" style={{ color: "#000000" }}></i>
                            <i className="fa-brands fa-linkedin-in fs-3 me-3" style={{ color: "#000000" }}></i>
                            <i className="fa-brands fa-x-twitter fs-3" style={{ color: "#000000" }}></i>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer;