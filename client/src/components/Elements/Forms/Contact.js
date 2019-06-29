import React from "react";

export const ContactForm = props => (
  <div className="contact-form">
    <form onSubmit={props.handleFormSubmit}>
      <label htmlFor="input-name">Name</label>
      <input
        name="name"
        value={props.name}
        onChange={props.handleInputChange}
        id="input-name"
        type="text"
        pattern="^[a-zA-Z0-9\s.,-]+$"
      />
      <label htmlFor="input-email">Email</label>
      <input
        name="email"
        value={props.email}
        onChange={props.handleInputChange}
        id="input-email"
        pattern="^[a-zA-Z0-9.!#$%&amp;'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
        type="text"
      />
      <label htmlFor="input-name">Message</label>
      <textarea
        name="message"
        value={props.message}
        onChange={props.handleInputChange}
        id="input-message"
        type="text"
        pattern="^[a-zA-Z0-9\s.,?!-]+$"
        rows="4"
      ></textarea>
      <input type="submit" value="Submit" className="submit-btn"
        disabled={(
          (
            !props.name ||
            !/^[a-zA-Z0-9\s.,-]+$/.test(props.name)
          ) || (
            !props.email ||
            !/^[a-zA-Z0-9.!#$%&amp;'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(props.email)
          ) || (
            !props.message ||
            !/^[a-zA-Z0-9\s.,?!-]+$/.test(props.message)
          )
        )}
      />
    </form>
  </div>
)