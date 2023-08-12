import React from "react";
import Login from "../componant/logscomp/Login";

function Log_in() {
  return (
    <div>
      <div className="my-4 ">
        {/* <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#login" aria-controls="offcanvasRight">Toggle right offcanvas</button> */}

        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="login"
          aria-labelledby="offcanvasRightLabel"
        >
          <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel">Join us !</h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <Login></Login>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Log_in;
