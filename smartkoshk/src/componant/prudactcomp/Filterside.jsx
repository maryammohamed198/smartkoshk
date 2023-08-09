import React from "react";
import "./slider.css";
// import { options} from "../data";
import Slider from "@mui/material/Slider";
import { useState } from "react";
export const options = [
  "option1",
  "option2",
  "option3",
  "option4",
  "option1",
  "option2",
  "option3",
  "option4",
  "option5",
  "option6",
];
export const color = ["danger", "dark", "light", "warning"];

export function Color() {
  return (
    <div className="w-100 my-4 border-2 border-secondary border-bottom ">
      <p>color</p>
      {color.map((word, index) => (
        <i
          key={index}
          className={` mx-1 my-3 bi bi-circle-fill text-${word}`}
        />
      ))}
    </div>
  );
}

export function Filter() {
  return (
    <div
      className="border-bottom border-2 border-secondary w-100 "
      style={{ fontSize: "14px", paddingBottom: "25px" }}
    >
      <div className="change1  d-flex my-1 mx-1">
        <p style={{ fontSize: "15px" }}>
          <b>header</b>
        </p>
      </div>

      <div className="d-flex w-100 ">
        <ul
          className="m-0   w-100"
          style={{ listStyleType: "none", padding: "0px" }}
        >
          {options.map((word, index) => (
            <li className="my-1 w-100   " key={index}>
              <div
                className="change2  d-flex justify-content-between w-100"
                style={{ textDecoration: "none" }}
              >
                <div>
                  {" "}
                  <input type="checkbox" name="filter" />
                  <span className="mx-2 ">{word}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function PriceRangeFilter({ minPrice, maxPrice, onChange }) {
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);

  const handleSliderChange = (event, newValue) => {
    setPriceRange(newValue);
  };
  const handlePriceRangeChange = (newPriceRange) => {
    setPriceRange(newPriceRange);
  };

  return (
    <div className="border-bottom border-2 border-secondary w-100 ">
      <h5>Price Range:</h5>
      <Slider
        className="w-75"
        value={priceRange}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        min={minPrice}
        max={maxPrice}
      />
      <p>
        Min Price: ${priceRange[0]} | Max Price: ${priceRange[1]}
      </p>
    </div>
  );
}

export default function Filterside() {
  const minPrice = 0; // Replace with your actual minimum price
  const maxPrice = 100; // Replace with your actual maximum price

  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);

  const handlePriceRangeChange = (newPriceRange) => {
    setPriceRange(newPriceRange);
    // Update filtered products based on new price range
  };

  return (
    <div>
      <div
        className="contianer  sider1  d-flex flex-wrap w-100 "
        style={{ height: "fit-content" }}
      >
        {/*Entertainment - price - Accessories- Massage-Massage Type -Track Type -Roller Dimension*/}

        <Filter></Filter>
        <Filter></Filter>
        <PriceRangeFilter
          minPrice={0} // Replace with your actual minimum price
          maxPrice={100} // Replace with your actual maximum price
          onChange={handlePriceRangeChange}
        />
        <Color></Color>
        <Filter></Filter>
        <Filter></Filter>
      </div>
    </div>
  );
}
