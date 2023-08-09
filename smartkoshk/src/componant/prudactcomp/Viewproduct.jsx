import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Rating } from "@mui/material";
import { CartContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

import "./slider.css";
import React, { useContext, useState } from "react";
import RecentlyViewed from "../homecomp/recsntlyviewed";

function Viewproduct({ productData }) {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const selected = productData.find((product) => product.id === parseInt(id));

  const [value, setValue] = useState(0);
  console.log("sss :", selected);

  const { wishItems, cartItems, addToWishlist, addToCart, removeFromWishlist } =
    useContext(CartContext);

  //   const isProductInWishlist = wishItems[key].find((key)=>key === (selected.id));
  // const isProductInWishlist = Object.keys(wishItems).some((key) => wishItems[key].includes(selected.id));

  const isProductInCart = Object.keys(cartItems).includes(
    selected.id.toString()
  );
  console.log(cartItems);
  console.log("cccccc", isProductInCart);
  const handleCartClick = () => {
    if (isProductInCart) {
      console.log("found");
    } else {
      addToCart(selected.id);
      console.log("add");
    }
  };

  const isProductInWishlist = Object.keys(wishItems).includes(
    selected.id.toString()
  );

  const handleWishlistClick = () => {
    if (isProductInWishlist) {
      removeFromWishlist(selected.id);
    } else {
      addToWishlist(selected.id);
    }
  };
  const navigate = useNavigate();
  const handleImageClick = (productData) => {
    setSelectedProduct(productData);

    navigate(`/wishlist`);
  };

  console.log(isProductInWishlist);
  console.log("productData :", wishItems);

  return (
    <div
      className="viewcontainer justify-content-center my-3   "
      style={{ position: "relative", top: "70px" }}
    >
      {" "}
      <Container id="parent" className=" justify-content-center ">
        <div className=" d-flex flex-wrap  " style={{ height: "fit-content" }}>
          <div
            id="child1"
            className="d-flex justify-content-center flex-wrap col-lg-7 col-12 "
            style={{ padding: "0px", height: "fit-content" }}
          >
            <div className="carousel-wrapper-view">
              <div>
                <img
                  onClick={() => handleImageClick(productData)}
                  className="d-block  "
                  style={{
                    height: "650px",
                    width: "600px",
                    objectFit: "contained",
                  }}
                  src={selected.imageurl}
                />
              </div>
            </div>
          </div>
          <div
            id="child2"
            className=" d-flex flex-wrap col-lg-5  col-12 "
            style={{
              overflow: "auto",
              boxSizing: "content-box",
              height: "100%",
            }}
          >
            <div className="w-100">
              <div>
                <p
                  className=""
                  style={{ textAlign: "left", fontSize: "1.5rem" }}
                >
                  {selected.name}
                </p>
              </div>
              <div className=" col-lg-4  col-5 d-flex my-3 ">
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </div>
              <div
                className="my-2"
                style={{ fontSize: ".8rem", color: "gray" }}
              >
                <p style={{ margin: "0px" }}>Vendor: {selected.vendor} </p>
                <p style={{ margin: "0px" }}>
                  availabilty:
                  {selected.quantity > 1
                    ? "Many In Stock"
                    : selected.quantity === 1
                    ? "Last one"
                    : "Sold Out"}
                </p>
                <p style={{ margin: "0px" }}>
                  product Type:{selected.productType}{" "}
                </p>
              </div>
              <div>
                <b
                  style={{
                    fontSize: "1.5rem",
                    textAlign: "left",
                    color: selected.old_price ? "red" : "blue",
                  }}
                >
                  <s className="m-2 text-dark">{selected.old_price}</s>
                  {selected.price}
                </b>
              </div>

              <div className="m-4" style={{ fontSize: ".8rem", color: "gray" }}>
                <p>Storage : {selected.Storage}</p>
                <p className="btn border-secondary-subtle">
                  {selected.Storage}
                </p>
              </div>
              <div className=" w-100 my-1 d-flex " style={{ fontSize: "18px" }}>
                <p style={{ fontSize: ".8rem", color: "gray" }}>color: </p>
                {Array.isArray(selected.color)
                  ? selected.color.map((color, index) => (
                      <i
                        key={index}
                        className={`bi bi-circle-fill mx-1 text-${color}`}
                      />
                    ))
                  : null}
              </div>

              <div className=" w-100">
                <button
                  className={`btn  ${
                    isProductInCart
                      ? "  bg-success-subtle "
                      : "bg-danger-subtle"
                  } w-75`}
                  onClick={handleCartClick}
                >
                  {" "}
                  {isProductInCart ? "Done" : "add to cart"}
                </button>
                {/* <button className={`btn    bg-success-subtle  w-75`} 
            onClick={() =>  addToCart(selected.id)}> add to cart</button> 
             */}
                <i
                  className={`bi  mx-5 ${
                    isProductInWishlist
                      ? " bi-heart-fill text-danger"
                      : "bi-heart "
                  }`}
                  onClick={handleWishlistClick}
                ></i>
              </div>
            </div>
          </div>
          <RecentlyViewed></RecentlyViewed>
        </div>
      </Container>
    </div>
  );
}

export default Viewproduct;
