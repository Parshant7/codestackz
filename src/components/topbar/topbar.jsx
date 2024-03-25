const TopBar = () => {
    return(
        <>
            <div className="d-flex" style={{backgroundColor:"#E9F6FF",height:"40px"}}>
                <div className="container px-3 my-auto">
                    <span className="fw-bold">info@codestackz.in</span>
                    <span className="float-end fw-bold d-lg-none"> <i className="fa-brands fa-linkedin-in fs-4 me-2" style={{color: "#000000"}}></i> <i className="fa-brands fa-x-twitter" style={{color: "#000000",fontSize:"20px"}}></i></span>
                    <span className="float-end fw-bold d-none d-lg-block">Opening Hours: Monday To Saturday : 7:00 am To 6:00 pm </span>
                </div>
            </div>
        </>
    )
}

export default TopBar;