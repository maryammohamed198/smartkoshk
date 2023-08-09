import { CartContext } from "../componant/context/Context";

import React, { useContext, useState, useEffect } from "react";
import { productData } from "../data/Data";
import "../componant/wishlistconp/wishcol.css";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleImageClick = (product) => {
    setSelectedProduct(product);

    navigate(`/Viewproduct/${product.id}`);
    console.log(product.id);
  };
  const {
    wishItems = {},
    addToWishlist,
    removeFromWishlist,
  } = useContext(CartContext);
  const isEmpty = Object.values(wishItems).every((value) => value === 0);
  console.log(isEmpty);
  console.log("h", wishItems);
  console.log("www", wishItems);

  return (
    <div className="wishlist-body">
      <div className="container">
        <h1 className="wishlist-heading">My WishList</h1>

        {isEmpty ? (
          <div className="empty-message">Your Wishlist is empty.</div>
        ) : (
          <div className="card-group  d-flex flex-wrap justify-content-center">
            {productData.map((product) => {
              if (wishItems[product.id] > 0) {
                return (
                  <div
                    className="card card-wishlist w-25"
                    style={{
                      minWidth: "280px",
                      margin: "20px",
                      borderRadius: "10px",
                      boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
                      overflow: "hidden",
                      backgroundColor: "#FFF",
                    }}
                    key={product.id}
                  >
                    <div className="card-img-container">
                      <img src={product.imageurl} className="card-img-top" />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">
                        <b>{product.name}</b>
                      </h5>
                      <p className="card-text">
                        <s className="mx-2 " style={{ color: "red" }}>
                          {" "}
                          ${product.old_price}
                        </s>{" "}
                        ${product.price}
                      </p>
                      <div className="my-2">
                        {product.color.map((color, index) => (
                          <i
                            key={index}
                            className={`bi bi-circle-fill text-${color}`}
                          />
                        ))}
                      </div>
                      <div
                        className="btn-group w-100"
                        role="group"
                        aria-label="Action buttons"
                      >
                        <button
                          className="btn bg-warning-subtle border-secondary-subtle "
                          onClick={() => handleImageClick(product)}
                        >
                          <i className="trash bi bi-eye-fill "></i>
                        </button>
                        <button
                          className="btn bg-warning-subtle border-secondary-subtle  "
                          onClick={() => removeFromWishlist(product.id)}
                        >
                          <i className="trash bi bi-trash3-fill "></i>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        )}
      </div>{" "}
    </div>
  );
};

export default Wishlist;
