import gursewak from '/images/ourteam/gursewak.jpg'
import './aboutusteam.css'
const AboutusTeam = () => {
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
                                <img src={gursewak} alt="Gursewak" className='imgWidth' />
                            </div>
                            <div className=' text-center py-2'>
                                <h3>Gursewak Singh</h3>
                                <h5 className='text-danger'>Project Manager</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutusTeam;