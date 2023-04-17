import React from "react";

// component imports
import Title from "../Title/Title";
import PImage from "../PImage/PImage";
import ContactEmailForm from "./ContactEmailForm/ContactEmailForm";

// icon imports
import contactEmailIcon from "../../assets/svg/arrow-white.svg";

function ContactFormSection() {
  return (
    <div className="contact-form-section">
      <div className="contact-form-section__content">
        <Title
          title="Get the latest news delivered to your inbox."
          subTitle="Get access to the exciting stuff — exclusive new deals, product launches and more. Plus, get a 10% discount on your next order."
        />
        <ContactEmailForm
          type="email"
          placeholder="Enter your email address"
          contactEmailIconSrc={contactEmailIcon}
        />
      </div>
    </div>
  );
}

export default ContactFormSection;
