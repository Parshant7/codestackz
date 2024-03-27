import { Link } from 'react-router-dom'

import webDImg from '/images/services/webD1.png'
import appDImg from '/images/services/appD1.png'
import webMImg from '/images/services/webM1.png'
import webCImg from '/images/services/webC1.png'

import './services.css'
const Services = () => {

    return (
        <>
            <div className="text-center p-4" style={{ backgroundColor: "whitesmoke", height: "fit-content" }}>
                <h1 style={{ fontFamily: "Headers !important", fontSize: "32px" }}>Our Services</h1>
            </div>
            <div className="row  px-4 pb-4" style={{ backgroundColor: "whitesmoke" }}>
                <div className="col-md-6 col-lg-4 mb-3">
                    <Link to={'services/webdevelopment'}>
                        <div className="card customCard">
                            <div className='card-header bg-white border-0 d-flex align-items-center'>
                                <img className="servicesIcon" src={webDImg} alt="" />
                                <span className="h5 ms-4">Web Development</span>
                            </div>
                            <div className="card-body">
                                <p>Our innovative web application development services are custom-built to meet the unique needs of businesses. Through the creation of responsive, user-friendly, and feature-rich web applications, we empower brands to enhance engagement and boost their online presence.</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                    <div className="card customCard">
                        <div className='card-header bg-white border-0 d-flex align-items-center'>
                            <img className="servicesIcon" src={appDImg} alt="" />
                            <span className="h5 ms-4">Mobile  Application Development</span>
                        </div>
                        <div className="card-body">
                            <p>Experience the power of mobile application development tailored to your needs. Our expert team crafts intuitive, high-performance mobile apps that captivate users and drive business growth. Elevate your brand's presence in the palm of your users' hands.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                    <div className="card customCard">
                        <div className='card-header bg-white border-0 d-flex align-items-center'>
                            <img className="servicesIcon" src={webMImg} alt="" />
                            <span className="h5 ms-4">Web Maintenance</span>
                        </div>
                        <div className="card-body">
                            <p>Ensure your website remains at its best with our comprehensive web maintenance services. From regular updates to performance optimizations, our team handles everything, allowing you to focus on your core business. Keep your online presence polished and secure with our reliable maintenance solutions.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                    <div className="card customCard">
                        <div className='card-header bg-white border-0 d-flex align-items-center'>
                            <img className="servicesIcon" src={webCImg} alt="" />
                            <span className="h5 ms-4">Web Consultation</span>
                        </div>
                        <div className="card-body">
                            <p>Unlock the full potential of your online presence with our expert web consultation services. From in-depth assessments to tailored strategies, we provide invaluable insights to enhance your digital footprint. Let us guide you through the complexities of the web landscape and pave the way for your online success.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;