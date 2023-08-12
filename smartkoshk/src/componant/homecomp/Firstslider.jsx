import React from "react";
export const src = [
  "https://smartkoshk.com/cdn/shop/files/Redmi_Note_12_Pro_-En-2.png?v=1679001918&width=1880",
  "https://smartkoshk.com/cdn/shop/files/iPhone-14-Pro-Max-1.png?v=1672664260&width=1880",
  "https://smartkoshk.com/cdn/shop/files/Samsung-A73-En-1.png?v=1675194937&width=1880",
];
function Firstslider() {
  return (
    <div>
      <div id="carouselExampleFade" class="carousel slide carousel-fade">
        <div class="carousel-inner">
          <div className="carousel-inner">
            {src.map((imageSrc, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : " "}`}
              >
                <img
                  src={imageSrc}
                  className="d-block w-100"
                  alt={`Slide ${index}`}
                />
              </div>
            ))}
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Firstslider;
