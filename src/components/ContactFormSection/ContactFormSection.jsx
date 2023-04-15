import React from "react";

// component imports
import Title from "../Title/Title";
import PImage from "../PImage/PImage";
import ContactEmailForm from "./ContactEmailForm/ContactEmailForm";

// icon imports
import contactEmailIcon from "../../assets/svg/arrow-white.svg";

// image imports
import contactSectionImage from "../../assets/Biom_wipe_2/Biom_wipe_2.png";

function ContactFormSection() {
  return (
    <div className="contact-form-section">
      <Title
        title="Get the latest news delivered to your inbox."
        subTitle="Get access to the exciting stuff — exclusive new deals, product launches and more. Plus, get a 10% discount on your next order."
      />
      <ContactEmailForm
        label="Enter your email address"
        contactEmailIconSrc={contactEmailIcon}
      />
      <PImage src={contactSectionImage} />
    </div>
  );
}

export default ContactFormSection;
