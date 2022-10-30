import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 text-center mb-5">
              <div className="col-md-12 mb-5">
                <h1>
                  <span>Contact Me</span>
                </h1>
              </div>
              <div className="col-md-12 mb-3 center contact-wrap">
                <div className="col-md-3 mx-auto">
                  <FaPhoneAlt size="32px" color="white" />
                </div>
                <div className="col-md-9 mx-auto">
                  <p>+63 916 621 7311</p>
                </div>
              </div>
              <div className="col-md-12 mb-3 center contact-wrap">
                <div className="col-md-3 mx-auto">
                  <FaEnvelope size="32px" color="white" />
                </div>
                <div className="col-md-9 mx-auto">
                  <p>janboym@gmail.com</p>
                </div>
              </div>
              <div className="col-md-12 mb-3 center contact-wrap">
                <div className="col-md-3 mx-auto">
                  <MdLocationPin size="32px" color="white" />
                </div>
                <div className="col-md-9 mx-auto">
                  <p>Makati City, Philippines</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 text-center mb-5">
              <div className="col-md-12 mb-5">
                <h1>
                  <span>Folow Me</span>
                </h1>
              </div>
              <div className="container">
                <ul className="list-inline mx-auto">
                  <li className="list-inline-item mx-3">
                    <FaLinkedin size="32px" color="white" />
                  </li>
                  <li className="list-inline-item mx-3">
                    <FaGithub size="32px" color="white" />
                  </li>
                  <li className="list-inline-item mx-3">
                    <FaTwitter size="32px" color="white" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
