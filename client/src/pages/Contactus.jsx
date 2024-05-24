import React from 'react'

import "../index.css"
import conatctbanner from "../img/contactbanner.png"
import phoneicon from "../img/phoneicon.png"
import chatlogo from "../img/chatlogo.png"
import contact1 from "../img/contact1.png"

export default function Contactus() {

  const scrollToSection = () => {
    const section = document.getElementById('target-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }

  };
  return (
    <div>

      <div>
        <img src={conatctbanner} className="contact-banner"></img>
      </div>

      <div class="row">
        <div class="col">
          <img src={phoneicon} className="phone-icon" ></img>
          <br></br>
          <h1 className="contact-heading"><u>Talk To US</u></h1>
          <br></br>
          <p>Our Services all avaible 24*7. please fill free to contact us in the given number.If not anwersed we will contact you shortly</p>
          <br></br>
          <p className="phone-number">+91-1234567898</p>
        </div>
        <div class="col1">
          <img src={chatlogo} className="phone-icon" ></img>
          <h1 className="contact-heading"><u>Contact Customer Support</u></h1>

          <br></br>
          <p>In case of any query click below and fill the form regarding the concern and we will reach out to you soon.</p>
          <br></br>
          <button class="btn btn-primary" onClick={scrollToSection}>Any Queries?</button>



        </div>
      </div>

      <h1 className='contact-title'>Connect with our office</h1>
      <br></br>

      <div class="container">
        <div class="left">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.6358375262043!2d70.7934408252945!3d22.36737517963837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c972761ce515%3A0x3651e3fe1e9df4f8!2sMarwadi%20University!5e0!3m2!1sen!2sin!4v1710225195956!5m2!1sen!2sin"
            width={800}
            height={330}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>
        <div class="right">
          UrbanNest.com pvt. ltd.<br></br>
          plot no 25, institutional area
          sector - 32, gurgaon - 122001
          phone: 08899939993
          fax: +91-0124-4866599
        </div>
      </div>
      <br>
      </br>
      <br>
      </br>
      <div id="target-section" >
        <div className="container1">
          <img className="c1-img" src={contact1}></img>
          <div class="c-form">
            <div className="row gy-4 gy-md-5 gy-lg-0 align-items-md-center">
              <div className="col-12 col-lg-6">
                <div className="border overflow-hidden">
                  <h1 className='contact-title'>Send Your Queries!</h1>
                  <form action="#!"  >
                    <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                      <div className="col-12">
                        <label htmlFor="fullname" className="form-label">
                          Full Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="fullname"
                          name="fullname"
                          defaultValue=""
                          required=""
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <label htmlFor="email" className="form-label">
                          Email <span className="text-danger">*</span>
                        </label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-envelope"
                              viewBox="0 0 16 16"
                            >
                              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                            </svg>
                          </span>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            defaultValue=""
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <label htmlFor="phone" className="form-label">
                          Phone Number
                        </label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-telephone"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                            </svg>
                          </span>
                          <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            name="phone"
                            defaultValue=""
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="subject" className="form-label">
                          Subject <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          name="subject"
                          defaultValue=""
                          required=""
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="message" className="form-label">
                          Message <span className="text-danger">*</span>
                        </label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows={3}
                          required=""
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-12">
                        <div className="d-grid">
                          <button class="btn btn-primary" >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>





    </div>
  )
}
