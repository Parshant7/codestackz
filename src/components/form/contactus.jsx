import { useState, useRef, useEffect } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import contactusImg from '/images/cai4.jpeg'
import Axios from 'axios'

import AOS from 'aos'
import 'aos/dist/aos.css'
import './contactus.css'

const ContactusForm = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  })



  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const contactRef = useRef(null);
  const serviceTypeRef = useRef(null);
  const aboutProjectRef = useRef(null);

  const [inputErr, setInputErr] = useState({ name: "", email: "", contact: "", serviceType: "", aboutProject: "", submitted: "" })

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  const emptyErr = () => {

    setTimeout(() => {
      let eles = document.getElementsByClassName('alert');
      for (let i = 0; i < eles.length; i++) {
        eles[i].classList.add('fadeOut');
      }

    }, 2000);

    setTimeout(() => {
      setInputErr({ name: "", email: "", contact: "", serviceType: "", aboutProject: "", submitted: "" });
    }, 3700)

  }



  const handleSubmit = (e) => {
    e.preventDefault();

    let name = nameRef.current.value.trim();
    let email = emailRef.current.value.trim();
    let contact = contactRef.current.value.trim();
    let serviceType = serviceTypeRef.current.value.trim();
    let aboutProject = aboutProjectRef.current.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name == "") {
      setInputErr(prevState => { console.log(prevState); return ({ ...prevState, name: "Please enter" }) });
      emptyErr();
      nameRef.current.focus();
      return;
    } else {
      setInputErr(prevState => ({ ...prevState, name: "" }));
    }
    if (email == "") {
      setInputErr(prevState => ({ ...prevState, email: "Please enter" }));
      emptyErr();
      emailRef.current.focus();
      return;
    }
    else if (!emailRegex.test(email)) {
      setInputErr(prevState => ({ ...prevState, email: "Please enter correct" }));
      emptyErr();
      emailRef.current.focus();
      return;
    }
    else {
      setInputErr(prevState => ({ ...prevState, email: "" }));
    }

    if (contact == "") {
      setInputErr(prevState => ({ ...prevState, contact: "Please enter" }));
      emptyErr();
      contactRef.current.focus();
      return;
    } else if (contact.length < 10) {
      setInputErr(prevState => ({ ...prevState, contact: "Please enter correct" }));
      emptyErr();
      contactRef.current.focus();
      return;
    }
    else {
      setInputErr(prevState => ({ ...prevState, contact: "" }));
    }

    if (serviceType == "none") {
      setInputErr(prevState => ({ ...prevState, serviceType: "Please select" }));
      emptyErr();
      serviceTypeRef.current.focus();
      return;
    }
    else {
      setInputErr(prevState => ({ ...prevState, serviceType: "" }));
    }

    if (aboutProject == "") {
      setInputErr(prevState => ({ ...prevState, aboutProject: "Please telll something" }));
      emptyErr();
      aboutProjectRef.current.focus();
      return;
    }
    else {
      setInputErr(prevState => ({ ...prevState, aboutProject: "" }));
    }



    alert("form is valid to submit.")

    const submitFunc = async () => {
      const obj = { name: name, email: email, contact: contact, serviceType: serviceType, aboutProject: aboutProject }
      console.log(obj);
      // const response = await Axios({
      //   method: "post",
      //   url: 'http://localhost:3000/submitcontactus',
      //   data: JSON.stringify(obj),
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // });
      // if (response.status == 201) {
      //   setInputErr(prevState => ({ ...prevState, submitted: "Submitted Successfully." }))
      //   emptyErr();
      // };


      const response = await Axios({
        url: 'https://formspree.io/f/xnqeggpo',
        method: 'post',
        headers: {
          'Accept': 'application/json'
        },
        data: obj
      });
      console.log(response);

    };
    submitFunc();

  }



  return (
    <>
      <section>


        <div className="text-center p-4 pb-2 pb-sm-4 letConnectHeading">
          <h1 style={{ fontFamily: "Headers !important", fontSize: "32px" }} data-aos="flip-right">Lets Connect</h1>
        </div>

        <div className="row letConnectMain pt-3">
          <div className="col-md-12 d-block d-lg-none" data-aos="fade-right">
            <div style={{ backgroundImage: `url(${contactusImg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom", width: "100%", height: "500px", filter: "blur(10px)" }}>

            </div>
          </div>
          <div className="offset-lg-1 col-md-12 col-lg-6 mdForm" >

            <div className='' data-aos="fade-left">
              <form action=" " id='contactusForm'>
                <div className="row" >



                  <div className=" col-xs-12 col-sm-9 col-md-6 mx-auto"  >
                    <input type="text" name="name" id="" placeholder="Name" className='inputField' ref={nameRef} /> <br />
                    <div className='errField'>
                      {/* <span className={`${inputErr.name ? '' : 'd-none'}`}>{errDiv(inputErr.name)}</span> */}
                      <div id='errAlertName' className={`alert alert-danger d-flex align-items-center ${inputErr.name ? "" : "d-none"}`} style={{ width: "fit-content" }} role="alert">
                        <div className='me-2'>
                          <i className="fa-solid fa-triangle-exclamation" style={{ color: "#f20202" }}></i>
                        </div>
                        <div>
                          {inputErr.name}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-9 col-md-6 mx-auto">
                    <input type="email" name="email" id="" placeholder="Email" className='inputField' ref={emailRef} /> <br />
                    <div className='errField'>
                      <div id='errAlertEmail' className={`alert alert-danger d-flex align-items-center ${inputErr.email ? "" : "d-none"}`} style={{ width: "fit-content" }} role="alert">
                        <div className='me-2'>
                          <i className="fa-solid fa-triangle-exclamation" style={{ color: "#f20202" }}></i>
                        </div>
                        <div>
                          {inputErr.email}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-9 col-md-6 mx-auto">
                    <input type="number" name="contact" id="" placeholder="Contact" className='inputField' ref={contactRef} /> <br />
                    <div className='errField'>
                      <div id='errAlertContact' className={`alert alert-danger d-flex align-items-center ${inputErr.contact ? "" : "d-none"}`} style={{ width: "fit-content" }} role="alert">
                        <div className='me-2'>
                          <i className="fa-solid fa-triangle-exclamation" style={{ color: "#f20202" }}></i>
                        </div>
                        <div>
                          {inputErr.contact}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-9 col-md-6 mx-auto">
                    <select name="serviceType" id="" className='inputField' ref={serviceTypeRef}>
                      <option value="none" >Service Type</option>
                      <option value="web">Web Dev</option>
                      <option value="app">App Dev</option>
                      <option value="webMaintenance">Web Maintenance</option>
                    </select> <br />
                    <div className='errField'>
                      <div id='errAlertSelectType' className={`alert alert-danger d-flex align-items-center ${inputErr.serviceType ? "" : "d-none"}`} style={{ width: "fit-content" }} role="alert">
                        <div className='me-2'>
                          <i className="fa-solid fa-triangle-exclamation" style={{ color: "#f20202" }}></i>
                        </div>
                        <div>
                          {inputErr.serviceType}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-9 col-md-8 mx-auto">
                    <textarea name="more" id="" cols="30" rows="5" placeholder="Tell us more about your project" className='inputField' ref={aboutProjectRef}></textarea> <br />
                    <div className='errField'>
                      <div id='errAlertAboutProject' className={`alert alert-danger d-flex align-items-center ${inputErr.aboutProject ? "" : "d-none"}`} style={{ width: "fit-content" }} role="alert">
                        <div className='me-2'>
                          <i className="fa-solid fa-triangle-exclamation" style={{ color: "#f20202" }}></i>
                        </div>
                        <div>
                          {inputErr.aboutProject}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4"></div>
                </div>
                <div className='row'>
                  <div className='col-xs-12 col-sm-12 col-md-12 mx-auto mb-4'>
                    <ReCAPTCHA
                      sitekey="6LfxLKopAAAAAML1BnOqMysKyMr1cn4E7HCE1Aqa"
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-9 col-md-4 mx-auto">
                    <button className='btn btn-success btn-lg w-50' onClick={handleSubmit}>Submit</button>
                  </div>
                  <div className="col-md-8">
                    <div className='successField w-100 px-4' >
                      <div id='successAlert' className={`alert alert-success d-flex align-items-center ${inputErr.submitted ? "" : "d-none"}`} style={{ width: "fit-content" }} role="alert">
                        <div className='me-2'>
                          <i className="fa-solid fa-triangle-exclamation" style={{ color: "#f20202" }}></i>
                        </div>
                        <div>
                          {inputErr.submitted}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4 d-none d-lg-block" data-aos="fade-right">
            <div style={{ backgroundImage: `url(${contactusImg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom", width: "100%", height: "100%" }}>

            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default ContactusForm;