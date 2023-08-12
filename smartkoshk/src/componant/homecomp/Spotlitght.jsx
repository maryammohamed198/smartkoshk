import React from "react";
function Spotlitght() {
  return (
    <div
      className="w-100 d-flex flex-wrap justify-content-center"
      style={{
        textAlign: "center",
        Height: "fit-content",
        background:
          "linear-gradient(226deg, rgba(255, 211, 226, 1), rgba(168, 255, 251, 1) 100%)",
      }}
    >
      <div
        className="w-100 d-flex flex-wrap justify-content-center my-4"
        style={{ minHeight: "250px", width: "232px" }}
      >
        <a
          href="#"
          className="mx-3"
          style={{ width: "470px", height: "250px" }}
        >
          <img
            className="data-lazy-loading w-100 h-100"
            src="https://smartkoshk.com/cdn/shop/files/Amazfit-GTs4-En_870x.png?v=1672668970 "
          />
        </a>
        <a
          href="#"
          className="mx-3"
          style={{ width: "470px", height: "250px" }}
        >
          <img
            className="data-lazy-loading w-100 h-100"
            src="https://smartkoshk.com/cdn/shop/files/Amazfit-GTs4-En_870x.png?v=1672668970 "
          />
        </a>
        <a
          href="#"
          className="mx-3"
          style={{ width: "470px", height: "250px" }}
        >
          <img
            className="data-lazy-loading w-100 h-100"
            src="https://smartkoshk.com/cdn/shop/files/Amazfit-GTs4-En_870x.png?v=1672668970 "
          />
        </a>
      </div>
    </div>
  );
}

export default Spotlitght;
