import React, { useState, useEffect, useRef } from "react";

function ProgressiveImage({ className, placeholder, src, width, height, alt }) {
  const [imageSrc, setImageSrc] = useState();
  const largeImageLoaded = useRef(false);

  const loadImage = () => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      largeImageLoaded.current = true;

      setImageSrc(src);
    };
  };

  useEffect(() => {
    if (largeImageLoaded.current) return;

    setImageSrc(placeholder);
  }, [placeholder]);

  useEffect(() => {
    loadImage();
  }, [src]);

  return (
    <img
      className={className}
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
    />
  );
}

export default ProgressiveImage;
