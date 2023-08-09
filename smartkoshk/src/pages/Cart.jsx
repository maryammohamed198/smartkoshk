import { CartContext } from "../componant/context/Context";
import { CartItem } from "../componant/cartcomp/Cartitem";
import React, { useContext, useState, useEffect } from "react";
import { productData } from "../data/Data";

function calculateTotal(cartItems, productData) {
  let total = 0;
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      let subitem = productData.find((product) => product.id === Number(item));
      total += cartItems[item] * subitem.price;
    }
  }
  return total.toFixed(2);
}

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const isEmpty = Object.values(cartItems).every((value) => value === 0);
  console.log(isEmpty);
  console.log("h", cartItems);
  // const [totalPrice , setTotalPrice] = useState(0);
  // useEffect(() => {
  //   let total = 0;
  //   for (const item in cartItems) {
  //     if (cartItems[item] > 0) {
  //       let subitem = productData.find(
  //         (product) => product.id === Number(item)
  //       );
  //       total += cartItems[item] * subitem.price;
  //     }
  //   }
  //   setTotalPrice(total);
  //   console.log(total);
  // }, [props]);

  const total = calculateTotal(cartItems, productData);
  return (
    <div>
      <div
        className="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvas"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            My Cart
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          <div className="col-12">
            <h1>Your Cart Items</h1>
          </div>

          {isEmpty ? (
            <div className="empty-message">Your cart is empty.</div>
          ) : (
            <div className="cart">
              {productData.map((product) => {
                if (cartItems[product.id] > 0) {
                  return <CartItem key={product.id} data={product} />;
                }
                return null;
              })}
            </div>
          )}
          <div className="col-12">
            <p className="mx-5 ">Total Price: ${total}</p>
            <button
              className="btn w-75 mx-5 my-2"
              style={{ backgroundColor: "#72be93" }}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
