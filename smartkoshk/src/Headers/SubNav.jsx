import React from "react";
import { Container } from "react-bootstrap";
import "./style/nav.css";
function SubNav() {
  return (
    <div className="w-100 bg-secondary-subtle">
      <nav className="navbar navbar-expand-lg w-100 ">
        <div className="d-flex   w-100">
          <button
            className="navbar-toggler bg-secondary-subtle"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ position: "absolute", bottom: "130px" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse subnav-container"
            id="navbarTogglerDemo03"
          >
            <ul className="navbar-nav me-auto mb-lg-0  flex-wrap   w-100 d-flex justify-content-around">
              <li className="nav-item subnav ">
                <a className=" nav-link " aria-current="page" href="/Products ">
                  <b>Smartphones</b>
                </a>
              </li>
              <li className="nav-item subnav ">
                <a className=" nav-link " aria-current="page" href="/Products ">
                  <b>Computerr Acc.</b>
                </a>
              </li>
              <li className="nav-item subnav ">
                <a className=" nav-link " aria-current="page" href="/Products ">
                  <b>Headphones</b>
                </a>
              </li>
              <li className="nav-item subnav ">
                <a className=" nav-link " aria-current="page" href="/Products ">
                  <b>Bags & wallets</b>
                </a>
              </li>{" "}
              <li className="nav-item subnav ">
                <a className=" nav-link " aria-current="page" href="/Products ">
                  <b>smartwatches</b>
                </a>
              </li>
              <li className="nav-item subnav ">
                <a className=" nav-link " aria-current="page" href="/Products ">
                  <b>car Acc</b>
                </a>
              </li>
              <li className="nav-item subnav ">
                <a className=" nav-link " aria-current="page" href="/Products ">
                  <b>charging</b>
                </a>
              </li>
              <li className="nav-item subnav ">
                <a className=" nav-link " aria-current="page" href="/Products ">
                  <b>innvation</b>
                </a>
              </li>
              <li className="nav-item subnav ">
                <a
                  className=" nav-link text-danger "
                  aria-current="page"
                  href="/Profile "
                >
                  <b>Main Deals</b>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default SubNav;
