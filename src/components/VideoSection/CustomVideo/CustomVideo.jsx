import React from "react";

import oceanVideo from "../../../assets/coverr-surfing-through-the-ocean-waves-4214-1080p.mp4";

function CustomVideo() {
  return (
    <video autoPlay muted loop playsInline className="video-section__video">
      <source src={oceanVideo} type="video/mp4" />
    </video>
  );
}

export default CustomVideo;
