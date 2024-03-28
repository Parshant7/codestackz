import teamTogether from '/images/ourteam/aboutusteam.jpeg'
import AOS from 'aos'
import 'aos/dist/aos.css'

import './aboutuscarousel.css'
import { useEffect } from 'react'
const AboutusCarousel = () => {

    useEffect(()=>{
        AOS.init({duration:1000,once:true})
    })
    return (
        <>
            <section>
                <div id="aboutusCarouselDiv">
                    <div className='row ' style={{ height: "100%" }}>
                        <div className="col-md-12 col-lg-12 p-0 mx-auto ">
                            <div className="mx-auto " style={{ width: "fit-content" }}>
                                <h1 className='fw-bold mb-4'>About Us</h1>
                                <p className=' fs-5 '>Embrace innovation and elevate your company's trajectory with our specialized development solutions.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='outer'>
                    <div id="inner">
                        <div className="row">
                            <div className="col-xl-11 col-lg-11 mx-auto">
                                <div className="row d-flex align-items-center">
                                    <div id='leftDiv' className="col-md-6 left h-100  d-flex align-items-center justify-content-center" data-aos="fade-right">
                                        <div className='mt-4' style={{fontSize:"19px"}}>
                                            <p>At Codestacks, we are driven by the vision of creating innovative solutions that shape the future. As a budding startup, we are dedicated to pioneering new paths in the software industry. While we may be young, our passion and determination to make an impact are unmatched.</p>
                                            <p>With Codestacks, you can expect nothing less than our absolute best. Join us on our journey as we embark on a quest to redefine possibilities and carve our place in the digital landscape. Together, let's build a future where innovation knows no limits.</p>
                                        </div>
                                    </div>
                                    <div id='rightDiv' className="col-md-6  d-flex align-items-center right"  data-aos="fade-left">
                                        <img src={teamTogether} alt=""  className="img-fluid"   />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default AboutusCarousel;