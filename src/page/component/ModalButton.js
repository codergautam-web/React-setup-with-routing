import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import LOGO from "./../../assets/images/logo.png";

const ModalButton = () => {
  const [showOtpModal, setShowOtpModal] = useState(false);
  const closeOtpModal = () => {
    setShowOtpModal(false);
  };

  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const closeSignUpModal = () => {
    setShowSignUpModal(false);
  };

  const [showLoginModal, setShowLoginModal] = useState(false);
  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  const [showForgetModal, setShowForgetModal] = useState(false);
  const closeForgetModal = () => {
    setShowForgetModal(false);
  };

  const [showChangeModal, setShowChangeModal] = useState(false);
  const closeChangeModal = () => {
    setShowChangeModal(false);
  };

  return (
    <>
      <div className="container mb-3">
        <button
          className="btn btn-primary mr-2"
          data-toggle="modal"
          onClick={() => setShowOtpModal(true)}
        >
          OTP
        </button>

        <button
          className="btn btn-primary mr-2"
          data-toggle="modal"
          onClick={() => setShowSignUpModal(true)}
        >
          Sign up
        </button>
        <button
          className="btn btn-primary mr-2"
          data-toggle="modal"
          onClick={() => setShowLoginModal(true)}
        >
          Log in
        </button>
        <button
          className="btn btn-primary mr-2"
          data-toggle="modal"
          onClick={() => setShowForgetModal(true)}
        >
          Forgot Password
        </button>
        <button className="btn btn-primary mr-2" data-toggle="modal" onClick={() => setShowChangeModal(true)}>
          Change Password
        </button>
      </div>

      {/* OTP MODAL */}
      <Modal
        show={showOtpModal}
        onHide={closeOtpModal}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
      >
        <Modal.Body className="p-0">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={() => closeOtpModal()}
          >
            <span className="ti-close"></span>
          </button>
          <div className="row no-gutters justify-content-between">
            <div className="col-sm-4 d-none d-sm-flex col-md-6  justify-content-center modal-form-img">
              <img
                className="img-fluid align-self-center "
                src={LOGO}
                alt="logo"
              />
            </div>
            <div className="col-sm-8  col-md-6 col-xl-6 px-5 pt-5">
              <button type="button" className="back btn btn-lg">
                <span className="ti-angle-left" aria-hidden="true"></span>
              </button>
              <form className="needs-validation " action="" novalidate>
                <div className=" mb-4 text-center ">
                  <h4 className="text-gray">OTP Verification</h4>
                  <p className="text-secondary">We have sent OTP on your email.</p>
                </div>
                <div className="form-group ">
                  <div className="input-group border-0 d-flex partitioned">
                    <input
                      id="validationTooltipcodeBox1"
                      type="number"
                      maxLength="1"
                    />
                    <input
                      id="validationTooltipcodeBox2"
                      type="number"
                      maxLength="1"
                    />
                    <input
                      id="validationTooltipcodeBox3"
                      type="number"
                      maxLength="1"
                    />
                    <input
                      id="validationTooltipcodeBox4"
                      type="number"
                      maxLength="1"
                    />
                    <input
                      id="validationTooltipcodeBox5"
                      type="number"
                      maxLength="1"
                    />
                    <input
                      id="validationTooltipcodeBox6"
                      type="number"
                      maxLength="1"
                    />
                    <div className="invalid-tooltip otp-validate">
                      Please enter valid OTP.
                    </div>
                  </div>
                </div>
                <div className="form-group mt-5 text-center">
                  <button
                    data-target="#changepasswordModal"
                    data-toggle="modal"
                    id="hide_otp-show_changepwd"
                    type="submit"
                    className="btn btn-primary btn-lg btn-block rounded-pill"
                  >
                    Next
                  </button>
                </div>
                <div className="form-group text-center mt-4">
                  <p>
                    Did't get OTP?{" "}
                    <a className="text-dark-violet font-weight-bold" href="#">
                      Resend
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* SIGNUP MODAL */}
      <Modal
        show={showSignUpModal}
        onHide={closeSignUpModal}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
      >
        <Modal.Body className="p-0">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={() => closeSignUpModal()}
          >
            <span className="ti-close"></span>
          </button>
          <div className="row no-gutters justify-content-between">
            <div className="col-sm-4 d-none d-sm-flex col-md-6  justify-content-center modal-form-img">
              <img
                className="img-fluid align-self-center "
                src={LOGO}
                alt="logo"
              />
            </div>
            <div className="col-sm-8  col-md-6 col-xl-6 px-5 pt-5">
              <form className="needs-validation" action="" novalidate="">
                <h4 className="text-gray mb-3">Sign Up</h4>

                <div className="form-group">
                  <div className="input-group	">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-user"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      id="validationTooltipFullname"
                      placeholder="Enter Full Name"
                      className="form-control  bg-light"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group ">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-mobile-alt"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      id="validationTooltipFullname"
                      placeholder="Enter Mobile Number"
                      className="form-control  bg-light"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group ">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-envelope"></i>
                      </span>
                    </div>
                    <input
                      type="email"
                      id="validationTooltipFullname"
                      placeholder="Enter Email Address"
                      className="form-control  bg-light"
                      required=""
                    />
                  </div>
                </div>

                <div className="form-group ">
                  <div className="input-group ">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-building"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      id="valllname"
                      placeholder="Enter Address"
                      className="form-control bg-light"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="input-group	">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-lock"></i>
                      </span>
                    </div>
                    <input
                      type="password"
                      name="password"
                      id="sg_txtPassword"
                      className="form-control"
                      placeholder="Enter Password"
                      required
                    />
                    <div className="input-group-prepend">
                      <span
                        onmouseup="invert_inPwd('#sg_txtPassword')"
                        onmousedown="invert_inText('#sg_txtPassword')"
                        id="reg_Pwd"
                        className="input-group-text text-red small so_hide_pswrd fa fa-eye"
                      ></span>
                    </div>
                  </div>
                </div>

                <div className="form-group mt-3 text-center">
                  <input
                    type="submit"
                    className="btn btn-primary btn-lg btn-block rounded-pill"
                    value="Register"
                  />
                </div>
                <div className="form-group text-center ">
                  <div className="custom-control custom-checkbox mr-sm-2">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customControlAutosizing"
                    />
                    <label
                      className="custom-control-label"
                      for="customControlAutosizing"
                    >
                      <small>
                        I agree to{" "}
                        <a className="text-violet" href="#" target="_blank">
                          Terms &Conditions
                        </a>{" "}
                        and{" "}
                        <a className="text-violet" href="#" target="_blank">
                          privacy policy
                        </a>
                      </small>{" "}
                    </label>
                  </div>
                </div>
                <div className="form-group mb-0 text-center">
                  <a
                    href="#loginModal"
                    id="hide-signup"
                    data-toggle="modal"
                    className="btn btn-light p-3 btn-block round round-bottom-left-0 round-bottom-right-0"
                  >
                    {" "}
                    Already Have an Account?{" "}
                    <span
                      className="
										text-dark-violet font-weight-bold"
                    >
                      Login
                    </span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* LOGIN MODAL */}
      <Modal
        show={showLoginModal}
        onHide={closeLoginModal}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
      >
        <Modal.Body className="p-0">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={() => closeLoginModal()}
          >
            <span className="ti-close"></span>
          </button>
          <div className="row no-gutters justify-content-between">
            <div className="col-sm-4 d-none d-sm-flex col-md-6  justify-content-center modal-form-img">
              <img
                className="img-fluid align-self-center "
                src={LOGO}
                alt="logo"
              />
            </div>
            <div className="col-sm-8  col-md-6 col-xl-6 px-5 pt-5">
              <form className="needs-validation" action="" novalidate="">
                <div className=" my-4">
                  <h4 className="text-gray text-capitalize">Log In</h4>
                </div>
                <div className="form-group">
                  <div className="input-group ">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-mobile-alt"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      id=""
                      placeholder="Enter Mobile Number"
                      className="form-control  bg-light"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group	">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-lock"></i>
                      </span>
                    </div>
                    <input
                      type="password"
                      name="password"
                      id="login_txtPassword"
                      className="form-control"
                      placeholder="Enter Password"
                      required
                    />
                    <div className="input-group-prepend">
                      <span
                        onmouseup="invert_inPwd('#login_txtPassword')"
                        id="login_Pwd"
                        className="input-group-text text-red small so_hide_pswrd fa fa-eye"
                      ></span>
                    </div>
                  </div>
                </div>
                <div className="form-group mt-4 text-center">
                  <input
                    type="submit"
                    className="btn btn-primary btn-lg btn-block rounded-pill"
                    value="Log In"
                  />
                </div>
                <div className="form-group my-4 text-center ">
                  <a
                    href="#forgotpasswordModal"
                    id="hide-loginModal"
                    data-toggle="modal"
                    className="font-weight-bold text-dark-violet"
                  >
                    Forgot Password
                  </a>
                </div>
                <div className="form-group mb-0 text-center">
                  <button className="btn btn-light p-3 btn-block round round-bottom-left-0 round-bottom-right-0">
                    {" "}
                    Create an Account?{" "}
                    <span
                      className="
										text-dark-violet font-weight-bold"
                    >
                      Sign Up
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* FORGET MODAL */}
      <Modal
        show={showForgetModal}
        onHide={closeForgetModal}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
      >
        <Modal.Body className="p-0">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={() => closeForgetModal()}
          >
            <span className="ti-close"></span>
          </button>
          <div className="row no-gutters justify-content-between">
            <div className="col-sm-4 d-none d-sm-flex col-md-6  justify-content-center modal-form-img">
              <img
                className="img-fluid align-self-center "
                src={LOGO}
                alt="logo"
              />
            </div>
            <div className="col-sm-8  col-md-6 col-xl-6 px-5 pb-5">
              <button type="button" className="back btn btn-lg">
                <span className="ti-angle-left" aria-hidden="true">
                  {" "}
                </span>
              </button>
              <form className="needs-validation " action="" novalidate>
                <div className="main-heading  py-5">
                  <h4 className="text-gray">Forgot Password</h4>
                  <p className="text-secondary">
                    Enter your registered email address to proceed.
                  </p>
                </div>
                <div className="form-group ">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-envelope"></i>
                      </span>
                    </div>
                    <input
                      type="email"
                      id=""
                      placeholder="Email Address"
                      className="form-control border-0 bg-light"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-4 text-center">
                  <button
                    data-target="#otpModal"
                    data-toggle="modal"
                    id="hide_fgt-pwd-show_otp"
                    type="submit"
                    className="btn btn-primary btn-lg btn-block rounded-pill"
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* CHANGE PASSWORD MODAL */}
      <Modal
        show={showChangeModal}
        onHide={closeChangeModal}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
      >
        <Modal.Body className="p-0">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={() => closeChangeModal()}
          >
            <span className="ti-close"></span>
          </button>
          <div className="row no-gutters justify-content-between">
            <div className="col-sm-4 d-none d-sm-flex col-md-6  justify-content-center modal-form-img">
              <img
                className="img-fluid align-self-center "
                src={LOGO}
                alt="logo"
              />
            </div>
            <div className="col-sm-8  col-md-6 col-xl-6 px-5 pb-5">
              <button type="button" className="back btn btn-lg">
                <span className="ti-angle-left" aria-hidden="true">
                  {" "}
                </span>
              </button>
              <form class='needs-validation ' action="" novalidate>
						<div class=" mb-4 mt-5 text-center "> 
								<h4 class="text-gray">Change Password</h4>
								<p class="text-secondary">You can change your password.</p>
							</div>
							<div class="form-group mb-4">
								<div class="input-group">
										<div class="input-group-prepend">
											<span class="input-group-text"><i class="fa fa-lock"></i></span>
										</div>
										<input type="password" id="validationTooltipNewpassword" minlength="8" maxlength="20" placeholder="New Password"  class="form-control border-0 bg-light" required />
										<div class="invalid-tooltip">
											Your new password must be between 8 and 20 characters.
										</div>
									</div>
							</div> 
							<div class="form-group mt-4 mb-4">
								<div class="input-group">
									<div class="input-group-prepend">
										<span class="input-group-text"><i class="fa fa-lock"></i></span>
									</div>
									<input type="password" id="validationTooltipCnewpassword" minlength="8" maxlength="20" placeholder="Confirm New Password"  class="form-control border-0 bg-light" required />
                  
								</div>
							</div> 
							<div class="form-group mt-4 text-center">
								<input type="submit" class="btn btn-primary btn-lg btn-block rounded-pill" value="Change Password" />
							</div>
						</form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalButton;
