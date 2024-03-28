import htmlLogo from '/images/techs/html.png'
import bootstrapLogo from '/images/techs/boots.png'
import sqlLogo from '/images/techs/sql-server.png'
import cssLogo from '/images/techs/css-3.png'
import nodejsLogo from '/images/techs/nodejs.png'
import mongoLogo from '/images/techs/mongo.png'

import AOS from 'aos'
import 'aos/dist/aos.css'
import './technologies.css'
import { useEffect } from 'react'

const Technologies = () => {

    useEffect(()=>{
        AOS.init({duration:1000,once:"true"})
    })

    return (
        <>
            <section className="mb-3  technoDiv">
                <div className="p-4 text-center">
                    <h2 className="h2 "  data-aos="flip-right">Technologies We work with</h2>
                </div>
                <div className="row p-4">
                    <div className="col-xl-9 col-lg-11 col-md-9  mx-auto">
                        <div className="row">
                            <div className="col-md-6 col-lg-4  my-3" data-aos="fade-right">
                                <div className='text-center  techCard'>
                                    <div className='mb-3'>
                                        <img src={htmlLogo} alt="" style={{width:"90px"}}/>
                                    </div>
                                    <span className='h5'>HTML 5</span>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4  my-3 " data-aos="fade-up">
                                <div className='text-center  techCard'>
                                    <div className='mb-3'>
                                        <img src={cssLogo} alt="" style={{width:"90px"}}/>
                                    </div>
                                    <span className='h5'>CSS 3</span>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4  my-3 " data-aos="fade-left">
                                <div className='text-center  techCard' style={{height:"100%"}}>
                                    <div className='mb-3 mt-3'>
                                        <img src={bootstrapLogo} alt="" style={{width:"90px",maxWidth:"90px"}}/>
                                    </div>
                                    <span className='h5'>Bootstrap</span>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4  my-3 " data-aos="fade-right">
                                <div className='text-center  techCard'>
                                    <div className='mb-3'>
                                        <img src={nodejsLogo} alt="" style={{width:"90px"}}/>
                                    </div>
                                    <span className='h5'>Node.js</span>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4  my-3 "  data-aos="fade-up">
                                <div className='text-center  techCard'>
                                    <div className='mb-3'>
                                        <img src={sqlLogo} alt="" style={{width:"90px"}}/>
                                    </div>
                                    <span className='h5'>My SQL</span>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4  my-3 " data-aos="fade-left">
                                <div className='text-center  techCard'>
                                    <div className='mb-3'>
                                        <img src={mongoLogo} alt="" style={{width:"90px"}}/>
                                    </div>
                                    <span className='h5'>Mongo DB</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Technologies;