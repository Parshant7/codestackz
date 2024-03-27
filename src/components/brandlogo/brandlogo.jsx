import './brandlogo.css'

const Brandlogo = () => {
    return (
        <>
            <div style={{ minHeight: "500px", margin: "300px" }}>
                <div className="book">
                    <div className="page page1">
                        <div className="front">
                            <i className='fa-solid fa-code'></i>
                        </div>
                        <div className="back">
                            
                        </div>
                    </div>
                    <div className="page page2"><i className='fa-solid fa-code'></i></div>
                    <div className="page page3"><i className='fa-solid fa-code'></i></div>
                </div>
            </div>
        </>
    )
}

export default Brandlogo;