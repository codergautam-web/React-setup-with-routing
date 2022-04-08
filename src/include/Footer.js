import React from "react";
import { Link } from "react-router-dom";
import APPSTORE from "./../assets/images/app-store.png";
import PLAYSTORE from "./../assets/images/playstore.png";
const Footer = () => {
  return (
    <>
      <footer className="position-relative text-center text-sm-left text-white">
        <section className="footer px-3 px-lg-5">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-4">
                <div className="textwidget">
                  <h4 className="widget-title mb-2 mt-3">Support</h4>
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link className="nav-link" to="#">
                        about us
                      </Link>
                      <Link className="nav-link" to="#">
                        contact us
                      </Link>
                      <Link className="nav-link" to="terms-and-conditions.html">
                        terms & conditions
                      </Link>
                      <Link className="nav-link" to="#">
                        privacy policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="textwidget">
                  <h4 className="widget-title mb-2 mt-3">Download App</h4>
                  <div className="my-3">
                    <Link
                      to="#"
                      target="_blank"
                      className="p-2 p-xl-0 d-inline-block"
                    >
                      <img
                        className="img-fluid"
                        src={APPSTORE}
                        alt="app-store.png"
                      />
                    </Link>
                    <Link
                      to="#"
                      target="_blank"
                      className="p-2 p-xl-0 d-inline-block"
                    >
                      <img
                        className="img-fluid"
                        src={PLAYSTORE}
                        alt="playstore.png"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-md-flex justify-content-end">
                <div className="textwidget ">
                  <h4 className="widget-title mb-2 mt-3">Follow us</h4>

                  <div className="social-contact my-3">
                    <Link
                      to="https://www.facebook.com/"
                      target="_blank"
                      className="facebook"
                    >
                      <span className="fab fa-facebook-f"></span>
                    </Link>
                    <Link
                      to="https://www.twitter.com/"
                      target="_blank"
                      className="twitter"
                    >
                      <span className="fab fa-twitter"></span>
                    </Link>
                    <Link
                      to="https://www.linkedin.com/"
                      target="_blank"
                      className="linkedin"
                    >
                      <span className="fab fa-linkedin"></span>
                    </Link>
                    <Link
                      to="https://www.instagram.com/"
                      target="_blank"
                      className="instagram"
                    >
                      <span className="fab fa-instagram "></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sub-footer py-4">
          <div className="container text-center">
            Copyright &copy; 2020 Snapp App. All rights reserved
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
