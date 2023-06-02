import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Style.css";
const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <div className="navBar1">
          <p className="pcolor1">Price</p><p className="pcolor">UP</p>
          </div>
          <div className="mainHeader">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link  fw-bolder" aria-current="page" to="home">
                Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  fw-bolder" to="about">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  fw-bolder" to="contact">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  fw-bolder" to="getstarted">
                  Get Started
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  fw-bolder" aria-current="page" to="/">
                LogIn
                </Link>
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ "--bs-scroll-height": "100px" }}
            >
                
              {/* <li className="nav-item">
                <Link className="nav-link text-uppercase fw-bolder" to="/">
                  LogOut
                </Link>
              </li> */}
            </ul>
          </div>
          </div>
        </div>
      </nav>
        <Outlet />
      </>
  );
};
export default Navbar;
