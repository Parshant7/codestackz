const TopBar = () => {
    return (
        <>
            <div id="topba" className="d-flex" style={{ backgroundColor: "#E9F6FF", height: "40px" }}>
                <div className="container px-3 my-auto">
                    <a className="fw-bold" href="mailto:info@codestackz.in">info@codestackz.in</a>
                    <span className="float-end fw-bold d-lg-none">
                        <a href="">
                            <i className="fa-brands fa-linkedin-in fs-4 me-2" style={{ color: "#000000" }}></i>
                        </a>
                        <a href="">
                            <i className="fa-brands fa-instagram fw-bold" style={{ color: "#000000", fontSize: "20px" }}></i>
                        </a>    
                    </span>
                    <span className="float-end fw-bold d-none d-lg-block">Opening Hours: Monday To Saturday : 7:00 am To 6:00 pm </span>
                </div>
            </div>
        </>
    )
}

export default TopBar;