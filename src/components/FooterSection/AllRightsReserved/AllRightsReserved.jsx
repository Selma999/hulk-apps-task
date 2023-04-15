import React from "react";

// component imports
import SocialMediaIcon from "./SocialMediaIcon/SocialMediaIcon";

// icon imports
import instagramIcon from "../../../assets/svg/instagram.svg";
import facebookIcon from "../../../assets/svg/facebook.svg";

function AllRightsReserved() {
  return (
    <div className="footer__all-rights-reserved">
      <p className="footer__all-rights-reserved__text">
        © 2021 biom. All rights reserved • Privacy Policy • Terms of Service
      </p>
      <div className="footer__all-rights-reserved__social-media-icons">
        <SocialMediaIcon socialMediaIcon={instagramIcon} />
        <SocialMediaIcon socialMediaIcon={facebookIcon} />
      </div>
    </div>
  );
}

export default AllRightsReserved;
