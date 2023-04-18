import React, { useState, useRef, useEffect } from "react";

function ProgressiveImage({ src, placeholder, alt }) {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const imgRef = useRef(null);

  const loadImage = (src) => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setImageSrc(src);
    };
  };

  useEffect(() => {
    loadImage;
  }, [src]);

  return <img ref={imgRef} src={imageSrc} alt={alt} />;
}

export default ProgressiveImage;
