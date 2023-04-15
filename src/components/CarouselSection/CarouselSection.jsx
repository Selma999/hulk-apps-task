import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// component imports
import CarouselItem from "./CarouselItem/CarouselItem";

function CarouselSection({ carouselList }) {
  return (
    <Carousel>
      {carouselList.map(({ id, headerText, title, author }) => {
        return (
          <CarouselItem
            key={id}
            headerText={headerText}
            title={title}
            author={author}
          />
        );
      })}
    </Carousel>
  );
}

export default CarouselSection;
