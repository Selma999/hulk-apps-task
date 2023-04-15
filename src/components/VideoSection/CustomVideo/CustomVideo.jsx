import React from "react";

function CustomVideo() {
  return (
    <video autoPlay muted loop playsInline className="video-section__video">
      <source
        src="src/assets/coverr-surfing-through-the-ocean-waves-4214-1080p.mp4"
        type="video/mp4"
      />
    </video>
  );
}

export default CustomVideo;
