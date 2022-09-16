import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "mdbreact/dist/css/mdb.css";
import Fade from "react-reveal/Fade";
import "./Contact.css";


const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r0zmh8d",
        "template_letwc98",
        form.current,
        "VNq5mMKIdALTWZsaF"
      )
      .then(
        (result) => {
          alert("OK");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Fade bottom duration={800}>
        <h2 className="h1-responsive text-center my-4 pt-4">
          Contact Me
        </h2>

        <div className="d-flex justify-content-center pt-3 pb-4">
          <div className="col-md-4 mb-md-2 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              ref={form}
              onSubmit={handleSubmit}
            >
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Full Name"
                      required
                      className="form-control"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      className="form-control md-textarea"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <input className="btn btn-primary" type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Contact;
