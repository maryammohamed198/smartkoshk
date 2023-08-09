import React from "react";
import SubNav from "./SubNav";
import Cart from "../pages/Cart";
import Log_in from "../pages/Login";
import "./style/nav.css";
function MainNave() {
  return (
    <div className="d-flex flex-wrap ">
      <nav className=" navbar navbar-expand-lg bg-danger mainnave col-12 col-lg-12 ">
        <div className="container-fluid  ">
          <div className=" col-3 col-lg-3  d-flex justify-content-center">
            <a
              className="navbar-brand  col-12 d-flex justify-content-center "
              style={{ display: "flex", objectFit: "contain" }}
              href="/"
            >
              <img
                className="logo  "
                style={{
                  height: "100px",
                  width: "40%",
                  imageRendering: " pixelated",
                }}
                src="logo.png"
              ></img>
            </a>
          </div>
          <div className="col-9 col-lg-5 my-2" style={{ height: "6vh" }}>
            <div style={container}>
              <div className=" mx-3  my-2 ">
                <i
                  className=" mx-2 bi bi-search-heart"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </div>
              <input
                placeholder="Search"
                style={{
                  height: "6vh",
                  color: "#000",
                  border: "none",
                  outline: "none",
                  textAlign: "right",
                  background: "#fff",
                  borderRadius: "15px",
                  width: "100%",
                }}
              />
            </div>
          </div>
          <div className="col-10 iconscontaner col-lg-4 d-flex flex-wrap  justify-content-around">
            <div className="col-6 col-lg-6  ">
              <p className="w-100 text-light">
                <b>from 10AM to 10PM</b>
                <br></br>
                <b>01188117765</b>
              </p>
            </div>
            <div className="col-6 col-lg-6">
              <a>
                {" "}
                <i
                  className="mx-2 bi bi-person text-black"
                  role="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#login"
                  aria-controls="offcanvasRight"
                  style={{ fontSize: "2rem" }}
                ></i>
              </a>
              <a href="/Wishlist">
                <i
                  className=" mx-2 bi bi-heart text-black"
                  role="button"
                  style={{ fontSize: "2rem" }}
                ></i>
              </a>
              <a>
                <i
                  className=" mx-2 bi bi-cart "
                  role="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvas"
                  aria-controls="offcanvasRight"
                  style={{ fontSize: "2rem" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <Cart></Cart>
      <Log_in></Log_in>
      <div className="col-lg-12 small-screen-only">
        <SubNav></SubNav>
      </div>
    </div>
  );
}

export default MainNave;

const container = {
  display: "flex",
  backgroundColor: "white",
  paddingRight: "3%",
  marginRight: "3%",
  marginLeft: "3%",
  borderRadius: 5,
};
