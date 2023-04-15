import React from "react";

function ContactEmailForm({ label, contactEmailIconSrc }) {
  return (
    <div className="contact-form-section__email">
      <input label={label} />
      <div>
        <span>
          <img src={contactEmailIconSrc} />
        </span>
      </div>
    </div>
  );
}

export default ContactEmailForm;
