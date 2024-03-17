import './contactusicons.css'

const Contactusicons = () => {


    return (
        <>
            <div className="row justify-content-around">
                <div className="col md-10 col-lg-9  mx-auto ">
                    <div className="row p-5">
                        <div className='col-md-4 text-center mb-4'>
                            <div className="iconshadow px-3 py-3">
                                <i className="fa-solid fa-phone fs-2 mb-3" style={{color:"#3652AD"}}></i> <br />
                                <p className='fw-bold fs-5 mb-2'>Phone Number</p>
                                <p>888 7777 555</p>
                            </div>
                            <div className="col-md-4"></div>
                            <div className="col-md-4"></div>
                        </div>
                        <div className='col-md-4 text-center mb-4'>
                            <div className="iconshadow px-3 py-3">
                                <i className="fa-solid fa-envelope fs-2 mb-3" style={{color:"#3652AD"}}></i> <br />
                                <p className='fw-bold fs-5 mb-2'>Email Address</p>
                                <p>info@codestackz.in</p>
                            </div>
                            <div className="col-md-4"></div>
                            <div className="col-md-4"></div>
                        </div>
                        <div className='col-md-4 text-center mb-4'>
                            <div className="iconshadow px-3 py-3">
                                <i className="fa-brands fa-skype fs-2 mb-3" style={{color:"#3652AD"}}></i> <br />
                                <p className='fw-bold fs-5 mb-2'>Skype</p>
                                <p>info@codestackz.in</p>
                            </div>
                            <div className="col-md-4"></div>
                            <div className="col-md-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactusicons;