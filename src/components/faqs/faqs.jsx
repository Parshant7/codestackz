import './faqs.css'

const Faqs = () => {
    return (
        <>


            <section className="bg-light">
                <div className="text-center h2 p-4 pb-5">
                    Frequently Asked Questions
                </div>
                <div>
                    <div className="row pb-5">
                        <div className="col-md-8 mx-auto p-0 mb-1">
                            <div>
                                <div className="que" data-bs-toggle="collapse" href="#faqans1" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Link with href
                                </div>

                                <div className="collapse " id="faqans1">
                                    <div className="ans">
                                        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 mx-auto p-0 mb-1">
                            <div>
                                <div className="que" data-bs-toggle="collapse" href="#faqans2" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Link with href
                                </div>

                                <div className="collapse" id="faqans2">
                                    <div className="ans">
                                        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 mx-auto p-0 mb-1">
                            <div>
                                <div className="que" data-bs-toggle="collapse" href="#faqans3" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Link with href
                                </div>

                                <div className="collapse" id="faqans3">
                                    <div className="ans">
                                        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
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

export default Faqs;