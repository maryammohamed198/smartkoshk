import React from "react";
import { ResponsiveFeaturedCategories, productData } from "../../data/Data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css";
import Cardtemplet from "../cardcomp/Cardtemplet";
function Five() {
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

  return (
    <div className="my-4">
      <div className="my-4 " style={{ marginLeft: "30%", marginRight: "30%" }}>
        <h3 className="mx-5">Top mobile phones</h3>
      </div>

      <div
        className="d-flex justify-content-center col-12 "
        style={{ height: "500px", textAlign: "center" }}
      >
        <Carousel
          className="h-100 center "
          infinite={true}
          responsive={ResponsiveFeaturedCategories}
        >
          {product}
        </Carousel>
      </div>
      <hr className="m-3"></hr>
    </div>
  );
}

export default Five;
