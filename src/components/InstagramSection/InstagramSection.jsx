import React from "react";

// component imports
import Title from "../Title/Title";
import PImage from "../PImage/PImage";
import Button from "../Button/Button";

// data imports
import instagramImageList from "../../data/instagramImageList";

// icon imports
import instagramIcon from "../../assets/svg/instagram.svg";

function InstagramSection() {
  return (
    <div className="instagram-section">
      <Title title="#cleanwithbiom" />
      <div className="instagram-section__image">
        {instagramImageList.map(({ id, src, placeholder, alt }, index) => {
          if (index % 2 === 0) {
            return (
              <PImage
                key={id}
                className="image-up"
                src={src}
                placeholder={placeholder}
                alt={alt}
              />
            );
          } else if (index % 2 !== 0) {
            return (
              <PImage
                key={id}
                className="image-down"
                src={src}
                placeholder={placeholder}
                alt={alt}
              />
            );
          }
        })}
      </div>
      <Button
        className="ghost"
        buttonTitle="Follow us on instagram"
        icon
        iconSrc={instagramIcon}
      />
    </div>
  );
}

export default InstagramSection;
