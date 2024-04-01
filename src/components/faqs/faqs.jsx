import './faqs.css'

const Faqs = () => {
    return (
        <>


            <section className="bg-light">
                <div className="text-center h2 p-4 pb-5">
                    Frequently Asked Questions
                </div>
                <div>


                    <div className="row">
                        <div className="col-md-9 mx-auto p-0 mb-1">
                            <div>
                                <div class="p-3 que" data-bs-toggle="collapse" href="#faqans1" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Link with href
                                </div>

                                <div class="collapse ans" id="faqans1">
                                    <div class="">
                                        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 mx-auto p-0 mb-1">
                            <div>
                                <div class="p-3 que" data-bs-toggle="collapse" href="#faqans2" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Link with href
                                </div>

                                <div class="collapse ans" id="faqans2">
                                    <div class="">
                                        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 mx-auto p-0 mb-1">
                            <div>
                                <div class="p-3 que" data-bs-toggle="collapse" href="#faqans3" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Link with href
                                </div>

                                <div class="collapse ans" id="faqans3">
                                    <div class="">
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