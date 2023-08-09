import React from "react";
import { product } from "../../data/Data";
import Cardtemplet from "../cardcomp/Cardtemplet";

function RecentlyViewed() {
  return (
    <div>
      <div className="wishlist-body my-5">
        <div className="container">
          <h4>Recently Viewed Products</h4>
          <div className="card-group">
            {product.map((item) => (
              <div key={item.id} className="card card-wishlist">
                <div className="card-img-container">
                  <img
                    src={item.imageurl}
                    className="card-img-top"
                    alt={item.name}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text">{item.price}</p>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Action buttons"
                  >
                    {/* <button className='btn'><i className="trash bi bi-trash3-fill"></i></button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentlyViewed;
