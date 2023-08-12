import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

export default function Cardtemplet(props) {
  const [hovered, setHovered] = React.useState(false);
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(CartContext);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const navigate = useNavigate();
  const handleImageClick = (props) => {
    setSelectedProduct(props);

    navigate(`/Viewproduct/${props.id}`);
  };
  return (
    <div
      style={{
        width: "220px",
        height: "410px",
        marginLeft: "10px",
        marginRight: "10px",
        // background:"red",
        position: "relative",
      }}
    >
      <div
        onClick={() => handleImageClick(props)}
        style={{
          position: "relative",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          className=""
          style={{ width: "220px", height: "270px" }}
          src={props.imageurl}
          alt="product image"
        />
        {hovered && (
          <div
            className=""
            style={{
              position: "absolute",
              bottom: "32px",
              width: "100%",
              height: "55%",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <div>
              <button
                className="btn bg-white mx-5"
                style={{ borderRadius: "25%" }}
              >
                {" "}
                Quick view
              </button>
            </div>
            <div
              className="bg-white w-100"
              style={{
                position: "absolute",
                bottom: "0px",
                height: "45%",
              }}
            >
              <button
                className="btn btn-outline-primary w-100 "
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                show options
              </button>
            </div>
          </div>
        )}
        <div style={{ textAlign: "left" }}>
          <p className="my-2 m-2">{props.name}</p>
        </div>
      </div>

      <p style={{ textAlign: "left", color: props.old_price ? "blue" : "red" }}>
        <s className="m-2 text-dark">{props.old_price}</s>
        {props.price}
      </p>

      {/* <i className='bi bi-circle-fill text-dark ' >gvgg</i> */}
      <div style={{ textAlign: "left" }}>
        {" "}
        {Array.isArray(props.color)
          ? props.color.map((color, index) => (
              <i key={index} className={`bi bi-circle-fill text-${color}`} />
            ))
          : null}
      </div>

      {/* <button onClick={() => addToCart(props.id)}>ff</button> */}
    </div>
  );
}
