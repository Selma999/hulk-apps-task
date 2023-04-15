import React from "react";

function CarouselItem({ headerText, title, author }) {
  return (
    <div className="carousel-section__item">
      <p>{headerText}</p>
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  );
}

export default CarouselItem;
