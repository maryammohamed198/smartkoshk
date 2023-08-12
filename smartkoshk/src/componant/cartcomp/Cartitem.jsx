
import { CartContext } from "../context/Context";
import React, { useContext ,useState,useEffect } from "react";
export const CartItem = (props) => {
  const { id,name,price,imageurl,old_price,color } = props.data;
  const { cartItems, addToCart, removeFromCart, decreaseQuantity } =
    useContext(CartContext);
    const [totalsub, setTotalPrice] = useState(0);
      useEffect(() => {
        let total = 0;
        for (const productId in cartItems) {
          total += price * cartItems[productId];
          console.log( 'test',productId,cartItems[productId],total)
        }
        setTotalPrice(total);
      }, [cartItems, props]);
//   console.log("sh", cartItems[id]);
  
  return (
    <div className=" col-12 w-100 d-flex flex-wrap">
       
          <div className="col-5">
  <img src={imageurl} className="w-100 h-75" alt='' />
</div>
             
              
    
      <div className="col-7 ">
        <div className="mx-2 ">
        <div>
          <b>{name}</b>
        </div>
        <div className="my-2"><s className="mx-2 " style={{color:"red"}}> ${old_price}</s> ${price}</div>
        <div className="d-flex w-100 my-1">
          
        </div>
        <div className="my-2">
          {color.map((color, index) => (
      <i key={index} className={`bi bi-circle-fill text-${color}`} />
    ))
  }
  </div>
  <div>
        <p> LE {price * cartItems[id]}
      
        </p> </div>
        <div className="  d-flex  "><div className=" col-10 countHandler   d-flex">
            <button  className='btn bg-secondary-subtle  w-25 ' style={{border:"0.5px solid gray"}}onClick={() => decreaseQuantity(id)}><i className="bi bi-dash-lg border-0 text-dark  "> </i>  </button>
            <input className=' btn w-25'  style={{border:"0.5px solid gray"}}value={cartItems[id]} />
            <button className='btn bg-secondary-subtle  w-25'  style={{border:"0.5px solid gray"}} onClick={() => addToCart(id)}> <i className="bi bi-plus-lg border-0 text-dark  "> </i> </button>
          </div>
          <div className=" col-2 ">
          <button  className="my-2 btn btn-outline-secondary border-0" onClick={() => removeFromCart(id)}><b className="bi bi-x-lg border-0 text-dark  "></b></button>
        </div>
          </div>
        
       
       
      </div></div>
      <hr></hr>

    </div>
  );
};

// export const Totalprice = (props) => {
  //   const { id,price} = props.data;
  //   const {cartItems} =useContext(CartContext);
  //   const [totalPrice, setTotalPrice] = useState(0);
  //   useEffect(() => {
  //     let total = 0;
  //     for (const productId in cartItems) {
  //       total += price * cartItems[productId];
  //     }
  //     setTotalPrice(total);
  //   }, [cartItems, props]);
  //   return (
  //     <div>
  //       <p className="mx-3">Total Price: ${totalPrice}</p>
  //     </div>
  //   )
  // }