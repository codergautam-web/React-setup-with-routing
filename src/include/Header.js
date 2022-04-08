import React from "react";
import { Link } from "react-router-dom";
import "./../assets/import.css";
import LOGO from "./../assets/images/logo.png";
import HeaderNavigation from "./HeaderNavigation";

const Header = () => {

  const scrollFunction = () => {
    if (window.scrollY > 100) {
      document.getElementById("header").classList.add("translate-minus")
      document.getElementById("bottom-header").classList.add("sticky-on")
    } else {
      document.getElementById("header").classList.remove("translate-minus")
      document.getElementById("header").classList.remove("sticky-on")
    }
  };

  window.addEventListener("scroll", scrollFunction);

  return (
    <>
      <header id="header" className="site-header minus">
        <nav className="navbar row no-gutters justify-content-end align-items-center navbar-expand-lg">
          <div className="col-md-4 col-5">
            <Link className="navbar-brand " to="/">
              <img className="img-fluid" src={LOGO} alt="logo" />
            </Link>
          </div>
          <div className="col-md-4 order-md-3 col-7 text-right d-flex align-self-center justify-content-end">
            <ul className=" nav align-items-center ml-auto nav-btns">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link btn-violet round round-xl"
                  to="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-user d-inline-block d-sm-none"></i>{" "}
                  <span className="d-sm-inline-block d-none">My Account</span>{" "}
                  <i className="ti-angle-down ml-2"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link btn-violet round round-xl"
                  to="#signupModal"
                  data-toggle="modal"
                >
                  <i className="fas fa-user"></i>{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">
                  <i className="fas fa-2x fa-shopping-bag"></i>{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">
                  <i className="far fa-2x fa-bell"></i>{" "}
                  <span className="badge">0</span>{" "}
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 order-md-2">
            <form className="form mt-3 mt-md-0" action="">
              <div className="form-group mb-0">
                <div className="input-group	">
                  <input
                    type="text"
                    id=""
                    placeholder="Search..."
                    className="form-control  bg-light"
                    required=""
                  />
                  <div className="input-group-prepend">
                    <button type="submit" className="input-group-text">
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </nav>

        <HeaderNavigation />
      </header>
    </>
  );
};

export default Header;
