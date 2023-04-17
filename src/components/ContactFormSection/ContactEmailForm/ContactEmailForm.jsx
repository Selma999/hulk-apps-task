import React from "react";

function ContactEmailForm({ placeholder, contactEmailIconSrc }) {
  return (
    <div className="contact-form-section__email">
      <input
        className="contact-form-section__email__input-field"
        placeholder={placeholder}
      />
      <div className="contact-form-section__email__icon">
        <span>
          <img src={contactEmailIconSrc} />
        </span>
      </div>
    </div>
  );
}

export default ContactEmailForm;
