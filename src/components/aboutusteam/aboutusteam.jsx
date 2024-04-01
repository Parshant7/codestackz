import gursewak from '/images/ourteam/gursewak.png'
import parshant from '/images/ourteam/parshant.png'
import balwinder from '/images/ourteam/balwinder.png'
import akashdeep from '/images/ourteam/akashdeep.png'
import lovish from '/images/ourteam/lovish.png'

import AOS from 'aos'

import './aboutusteam.css'
import { useEffect } from 'react'
const AboutusTeam = () => {


    useEffect(()=>{
        const eles = document.getElementsByClassName('iconshadow');
        Array.from(eles).forEach(ele=>{
            ele.setAttribute('data-aos',"fade-up");
        })
        AOS.init({duration:1000,once:"true"})
    })

    return (
        <>
            <section>
                <div className="text-center py-4 h2">
                    Our Leadership
                </div>
                <div className="row justify-content-evenly  px-5 pb-5">
                    <div className="col-md-3 my-4 p-0 iconshadow mx-4" style={{ width: "fit-content" }}>
                        <div className="card " style={{ width: "18rem" }}>
                            <div className="card-body p-0 imgWidth"  >
                                <img src={gursewak} alt="Gursewak" className='imgWidth' />
                            </div>
                            <div className=' text-center py-2'>
                                <h3>Gursewak Singh</h3>
                                <h5 className='text-danger'>Project Manager</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-4 p-0 iconshadow mx-4" style={{ width: "fit-content" }}>
                        <div className="card " style={{ width: "18rem" }}>
                            <div className="card-body p-0 imgWidth"  >
                                <img src={parshant} alt="Gursewak" className='imgWidth' />
                            </div>
                            <div className=' text-center py-2'>
                                <h3>Parshant Khichi</h3>
                                <h5 className='text-danger'>UI/UX Designer</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-4 p-0 iconshadow mx-4" style={{ width: "fit-content" }}>
                        <div className="card " style={{ width: "18rem" }}>
                            <div className="card-body p-0 imgWidth"  >
                                <img src={balwinder} alt="Gursewak" className='imgWidth' />
                            </div>
                            <div className=' text-center py-2'>
                                <h3>Balwinder Singh</h3>
                                <h5 className='text-danger'>Content Writer</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-4 p-0 iconshadow mx-4" style={{ width: "fit-content" }}>
                        <div className="card " style={{ width: "18rem" }}>
                            <div className="card-body p-0 imgWidth"  >
                                <img src={akashdeep} alt="Gursewak" className='imgWidth' />
                            </div>
                            <div className=' text-center py-2'>
                                <h3>Akashdeep Singh</h3>
                                <h5 className='text-danger'>Business Developer</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-4 p-0 iconshadow mx-4" style={{ width: "fit-content" }}>
                        <div className="card " style={{ width: "18rem" }}>
                            <div className="card-body p-0 imgWidth"  >
                                <img src={lovish} alt="Gursewak" className='imgWidth' />
                            </div>
                            <div className=' text-center py-2'>
                                <h3>Lovish Bansal</h3>
                                <h5 className='text-danger'>Web Developer</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutusTeam;