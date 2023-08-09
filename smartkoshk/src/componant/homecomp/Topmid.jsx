import React from "react";
import { ResponsiveTopMidRange, productData } from "../../data/Data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css";
import Cardtemplet from "../cardcomp/Cardtemplet";

function Topmid() {
  const product = productData.map((item) => (
    <Cardtemplet
      imageurl={item.imageurl}
      description={item.description}
      price={item.price}
      old_price={item.old_price}
      name={item.name}
      color={item.color}
    />
  ));
  return (
    <div className="my-4 ">
      <div className="my-4 " style={{ marginLeft: "30%", marginRight: "30%" }}>
        <h3>Top Mid Range</h3>
      </div>

      {/* <div className='aligncenter' style={{textAlign:"center",width:"100%" ,backgroundColor:"red"}} > */}
      <div
        className="d-flex flex-wrap  justify-content-center"
        style={{ minHeight: "640.67px", marginLeft: "10%", marginRight: "10%" }}
      >
        <div
          className="col-6"
          style={{ width: "535.69px", height: "640.67px" }}
        >
          <img
            className="w-100 h-100"
            src="https://smartkoshk.com/cdn/shop/files/Oppo-Reno-7-Offer2-modified.png?v=1672680059"
          />
        </div>
        <div
          className=" col-6 d-flex justify-content-center  "
          style={{ textAlign: "center" }}
        >
          <Carousel
            className="topcenter"
            style={{ height: "500px" }}
            infinite={true}
            responsive={ResponsiveTopMidRange}
          >
            {product}
          </Carousel>
        </div>
      </div>
      {/* </div> */}
      <hr className="m-3"></hr>
    </div>
  );
}

export default Topmid;
