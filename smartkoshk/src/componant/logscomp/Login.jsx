import React, { useState } from "react";
import "./login.css";
import Regester from "./Regester";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showResetForm, setShowResetForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showRegisterForm, setShowRegisterForm] = useState(false); // Corrected naming
  const [resetEmail, setResetEmail] = useState("");
  const [resetMessage, setResetMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleResetSubmit = (event) => {
    event.preventDefault();
    setResetMessage(`Password reset link sent to ${resetEmail}`);
  };

  const handleResetCancel = () => {
    setShowResetForm(false);
    setResetEmail("");
    setResetMessage("");
  };

  return (
    <div className="margenleft" style={{ position: "relative", width: "100%" }}>
      {showLoginForm && (
        <div>
          <h5>Login</h5>
          <form onSubmit={handleSubmit} style={{ fontSize: "1rem" }}>
            <label className="my-1 " htmlFor="email">
              Email Address <span className="text-danger">*</span>
            </label>{" "}
            <br />
            <input
              className="my-1 w-100 bg-white logininput btn "
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <br />
            <label className="my-1" htmlFor="password">
              Password <span className="text-danger">*</span>
            </label>{" "}
            <br />
            <input
              className="my-1 w-100 btn bg-white logininput"
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <br />
            <button
              className="my-2 bg-primary btn w-100 text-light "
              type="submit"
            >
              <b>Login</b>
            </button>{" "}
            <br />
            <button
              className="my-2 w-100  bg-white"
              type="button"
              style={{ border: "none", fontSize: "0.9rem" }}
              onClick={() => setShowResetForm(true)}
            >
              Forgot your password?
            </button>
            <button
              className="my-2 btn-outline-secondary  w-100   btn "
              type="button"
              onClick={() => {
                setShowRegisterForm(true);
                setShowLoginForm(false);
                setShowResetForm(false);
              }}
            >
              <b>create account</b>
            </button>
          </form>
        </div>
      )}
      {showResetForm && (
        <div>
          <form onSubmit={handleResetSubmit}>
            <div className="w-100 col-12 my-2">
              <h4>Reset your password</h4>
              <p>We will send you an email to reset your password</p>
            </div>
            <label className="my-1" htmlFor="reset-email">
              Enter your email <span className="text-danger">*</span>
            </label>
            <br />
            <input
              className="my-1 w-100 btn logininput "
              type="email"
              id="reset-email"
              value={resetEmail}
              onChange={(event) => setResetEmail(event.target.value)}
              required
            />
            <br />
            <button
              className=" btn w-100  text-light my-3 "
              style={{ backgroundColor: "#7DCEA0" }}
              type="submit"
            >
              <span>Reset Password</span>
            </button>
            <br />{" "}
            <button
              type="button"
              className="my-2 mx-2  w-100  btn btn-outline-secondary"
              onClick={handleResetCancel}
            >
              Cancel
            </button>
          </form>
          {resetMessage && <p>{resetMessage}</p>}
        </div>
      )}
      {showRegisterForm && <Regester></Regester>}
    </div>
  );
}

export default Login;
