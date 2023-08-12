import React, { useState } from "react";
import "./login.css";

const Profile = () => {
  //   const [formData, setFormData] = useState(userData);

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [name]: value,
  //     }));
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     onUpdate(formData);
  //   };

  return (
    <div className=" d-flex flex-wrap justify-content-center">
      <h3
        className="col-12 text-secondary my-3"
        style={{ maxWidth: "1500px", height: "fit-content" }}
      >
        My Profile
      </h3>
      <div
        className=" col-12 d-flex flex-wrap justify-content-center"
        style={{
          maxWidth: "1500px",
          height: "fit-content",
          fontSize: "1.3rem",
        }}
      >
        <form
          className=" d-flex flex-wrap col-12"
          style={{
            maxWidth: "1125px",
            height: "fit-content",
            fontSize: "1.3rem",
          }}
          // onSubmit={handleSubmit}
        >
          <label className="  mx-4  w-100" htmlFor="firstname">
            firstname <span className="text-danger">*</span>
          </label>
          <br />{" "}
          <input
            type="text"
            className="my-1 w-100 mx-4  btn bg-white logininput "
            id="firstname"
            // value={formData.firstName}
            //  onChange={handleChange}
          />
          <br />
          <label className="  mx-4  w-100" htmlFor="lastname">
            lastname <span className="text-danger">*</span>
          </label>
          <br />{" "}
          <input
            type="text"
            className="my-1 w-100 mx-4  btn bg-white logininput "
            id="lastname"
            // value={formData.lastName}
            //  onChange={handleChange}
          />
          <br />
          <label className=" mx-4   w-100" htmlFor="email">
            Email <span className="text-danger">*</span>
          </label>
          <br />{" "}
          <input
            type="email"
            className="my-1 w-100  mx-4  btn bg-white logininput "
            id="email"
            //  value={formData.email}
            //  onChange={handleChange}
          />
          <br />
          <label className=" mx-4  w-100" htmlFor="password">
            Password <span className="text-danger">*</span>
          </label>
          <br />{" "}
          <input
            type="password"
            className="my-1 w-100 mx-4  btn bg-white logininput "
            id="password"
            //  value={formData.password}
            //  onChange={handleChange}
          />
          <br />
          <button
            type="submit"
            className="my-3  mx-4 w-50 btn bg-primary text-light"
          >
            {" "}
            <b>Update</b>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
