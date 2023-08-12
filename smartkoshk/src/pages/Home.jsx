import React from "react";
import Firstsec from "../componant/homecomp/firstsec";
import Firstslider from "../componant/homecomp/Firstslider";
import Categories from "../componant/homecomp/Categories";
import Topmid from "../componant/homecomp/Topmid";
import Five from "../componant/homecomp/Slidercardsfive";
import Spotlitght from "../componant/homecomp/Spotlitght";
import Recsntlyviewed from "../componant/homecomp/recsntlyviewed";
function Home() {
  return (
    <div>
      <Firstslider />
      <Firstsec />
      <Categories></Categories>
      <Five></Five>
      <div
        className="d-flex justify-content-center "
        style={{ height: "250px", MaxWidth: "1500px", minWidth: "150px" }}
      >
        <img
          className=""
          style={{
            maxHeight: "250px",
            minHeight: "200px",
            MaxWidth: "1500px",
            minWidth: "100px",
          }}
          src="https://smartkoshk.com/cdn/shop/files/Smartwatches-banner-En2_1770x.png?v=1674509914"
        />
      </div>
      <Five></Five>
      <div
        className="d-flex justify-content-center "
        style={{ height: "250px", MaxWidth: "1500px", minWidth: "150px" }}
      >
        <img
          className=""
          style={{
            maxHeight: "250px",
            minHeight: "200px",
            MaxWidth: "1500px",
            minWidth: "100px",
          }}
          src="https://smartkoshk.com/cdn/shop/files/Smartwatches-banner-En2_1770x.png?v=1674509914"
        />
      </div>
      <Five></Five>
      <Spotlitght></Spotlitght>
      <Topmid></Topmid>
      <div
        className="d-flex justify-content-center "
        style={{ height: "250px", MaxWidth: "1500px", minWidth: "150px" }}
      >
        <img
          className=""
          style={{
            maxHeight: "250px",
            minHeight: "200px",
            MaxWidth: "1500px",
            minWidth: "100px",
          }}
          src="https://smartkoshk.com/cdn/shop/files/Smartwatches-banner-En2_1770x.png?v=1674509914"
        />
      </div>
      <Five></Five>
      <div
        className="d-flex justify-content-center "
        style={{ height: "250px", MaxWidth: "1500px", minWidth: "150px" }}
      >
        <img
          className=""
          style={{
            maxHeight: "250px",
            minHeight: "200px",
            MaxWidth: "1500px",
            minWidth: "100px",
          }}
          src="https://smartkoshk.com/cdn/shop/files/Smartwatches-banner-En2_1770x.png?v=1674509914"
        />
      </div>
      <Five></Five>
      <div
        className="d-flex justify-content-center "
        style={{ height: "250px", MaxWidth: "1500px", minWidth: "150px" }}
      >
        <img
          className=""
          style={{
            maxHeight: "250px",
            minHeight: "200px",
            MaxWidth: "1500px",
            minWidth: "100px",
          }}
          src="https://smartkoshk.com/cdn/shop/files/Smartwatches-banner-En2_1770x.png?v=1674509914"
        />
      </div>
      <Five></Five>

      <Recsntlyviewed></Recsntlyviewed>
    </div>
  );
}

export default Home;
