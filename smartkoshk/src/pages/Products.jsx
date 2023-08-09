import React from "react";
import "./style/pages.css";
import Cardtemplet from "../componant/cardcomp/Cardtemplet";
import { productData } from "../data/Data";
import Filterside from "../componant/prudactcomp/Filterside";
import Five from "../componant/homecomp/Slidercardsfive";
const product = productData.map((item) => (
  <Cardtemplet
    imageurl={item.imageurl}
    id={item.id}
    description={item.description}
    price={item.price}
    old_price={item.old_price}
    name={item.name}
    color={item.color}
  />
));
function products() {
  return (
    <div
      className=" d-flex  flex-wrap justify-content-center align-content-center"
      style={{ position: "relative", top: "70px" }}
    >
      <section className="sectionone d-flex  flex-wrap">
        <div className="" style={{ height: "100%", width: "20%" }}>
          <Filterside></Filterside>
        </div>
        <div
          className="d-flex flex-wrap "
          style={{ height: "fit-content", width: "80%" }}
        >
          <div className="w-100 " style={{ width: "1180px", height: "190px" }}>
            <img
              src="https://smartkoshk.com/cdn/shop/files/Smartwatches-banner-En2_1770x.png?v=1674509914"
              style={{ width: "100%", height: "190px" }}
            />
          </div>
          <div
            className="d-flex my-5 flex-wrap justify-content-around "
            style={{ height: "100%", width: "100%" }}
          >
            {product}
          </div>
        </div>
      </section>
      <div
        className="d-flex my-5 flex-wrap justify-content-around "
        style={{ height: "100%", width: "100%" }}
      >
        <Five />
      </div>
    </div>
  );
}

export default products;
