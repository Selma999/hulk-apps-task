import React from "react";

// component imports
import Title from "../Title/Title";
import PImage from "../PImage/PImage";
import Button from "../Button/Button";

// data imports
import instagramImageList from "../../data/instagramImageList";

// icon imports
import { Instagram } from "../../assets/svgr";

function InstagramSection() {
  return (
    <div className="instagram-section">
      <Title title="#cleanwithbiom" />
      <div className="instagram-section__image">
        {instagramImageList.map(
          ({ id, src, placeholder, alt, width, height }, index) => {
            if (index % 2 === 0) {
              return (
                <PImage
                  key={id}
                  className="image-up"
                  src={src}
                  placeholder={placeholder}
                  alt={alt}
                  width={width}
                  height={height}
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
                  width={width}
                  height={height}
                />
              );
            }
          }
        )}
      </div>
      <Button
        type="primary"
        buttonTitle="Follow us on instagram"
        hoverAnimation={Button.HoverAnimationTypes.FILL_BACKGROUND}
        icon={<Instagram width="18" height="18" />}
        outline
      />
    </div>
  );
}

export default InstagramSection;
