import { createContext, useState } from "react";
export const CartContext = createContext(null);
export const ShoppinghcartProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [wishItems, setWishItems] = useState({});
  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const currentValue = prev[itemId] || 0;
      return { ...prev, [itemId]: currentValue + 1 };
    });
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      return { ...prev, [itemId]: 0 };
    });
  };
  const decreaseQuantity = (itemId) => {
    setCartItems((prev) => {
      const currentValue = prev[itemId] || 0;
      return { ...prev, [itemId]: currentValue - 1 };
    });
  };
  ///////////////////////////
  const addToWishlist = (itemId) => {
    setWishItems((prev) => {
      const currentValue = prev[itemId] || 0;
      return { ...prev, [itemId]: currentValue + 1 };
    });
  };

  const removeFromWishlist = (itemId) => {
    setWishItems((prev) => {
      return { ...prev, [itemId]: 0 };
    });
  };
  ////
  // const getTotalcost=()=>{
  //   let total=0;
  //   for(const item in cartItems){
  //     if (cartItems[item]>0){
  //       let subitem=products.find((product)=> product.id ===Number(item));
  //       total+=cartItems[item]*subitem.price

  //     }
  //   }
  //   return total
  // }
  const contextValues = {
    cartItems,
    addToCart,
    decreaseQuantity,
    removeFromCart,
    wishItems,
    addToWishlist,

    removeFromWishlist,
  };
  console.log("sh", cartItems);
  return (
    <CartContext.Provider value={contextValues}>
      {props.children}
    </CartContext.Provider>
  );
};
