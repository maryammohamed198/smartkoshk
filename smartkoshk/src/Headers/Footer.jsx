import React, { useState } from "react";
export default function Footer() {
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div
      className=" bg-secondary-subtle  d-flex flex-wrap justify-content-center"
      style={{ minHeight: "500px", maxHeight: "fit-content", width: "100%" }}
    >
      <div className="w-50 my-4" style={{ textAlign: "center" }}>
        <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
        <p>Get the latest updates on new products and upcoming sales</p>
        <div className="w-100 my-3 ">
          <form onSubmit={handleSubmit}>
            {/* <label className='my-1 ' htmlFor="email">Email Address <span className='text-danger'>*</span></label> <br /> */}
            <input
              className=" w-75 bg-white  btn "
              type="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <button className=" bg-primary btn w-25 text-light " type="submit">
              <b>Login</b>
            </button>{" "}
            <br />
          </form>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-align-content-around  w-75">
        <div className="col-lg-4  p-5 col-6 text-gray">
          <h5 className="text-dark">SHOP</h5>
          <p className="">New Arrivals</p>
          <p className="">Less Than 100EGP</p>
          <p className="">Last Piece</p>
          <p className="">Affilate</p>
        </div>
        <div className="col-lg-4 p-5 col-6 text-gray">
          <h5 className="text-dark">MY ACCOUNT </h5>
          <p className="">Login</p>
          <p className="">Wishlist</p>
        </div>
        <div className="col-lg-4 p-5 col-12 text-gray ">
          <h5 className="text-dark">ABOUT SMARTKOSHK</h5>
          <p className="">
            <b>
              Smartkoshk #1 Electronics and mobile accessories store in Egypt.
            </b>
          </p>
          <p className="">
            {" "}
            <i className="bi bi-phone"></i>
            <b> Whatsapp & Calls: 01099446288</b>
          </p>
          <p className="">
            {" "}
            <i className="bi bi-phone"></i>
            <b>Whatsapp & Calls: 01099445788</b>
          </p>
          <p className="">
            {" "}
            <i className="bi bi-mail"></i>
            <b>
              <a> info@smartkoshk.com</a>
            </b>
          </p>
          <div>
            <i className="bi mx-1 bi-facebook"></i>
            <i className="bi mx-1 bi-instagram"></i>
            <i className="bi mx-1 bi-twitter "></i>
          </div>
        </div>
      </div>
    </div>
  );
}
