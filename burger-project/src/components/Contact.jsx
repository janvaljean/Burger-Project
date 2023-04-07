import React from "react";
import BannerImage from "../assets/banner.png";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Please Contact Us</h1>
        <form>
          <label>Name</label>
          <input
            name="name"
            type="text"
            placeholder="Please enter your name..."
          />
          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="please enter email..."
          />
          <label>Your Message</label>
          <textarea
            rows={6}
            name="message"
            placeholder="please enter your message..."
          />
        </form>
        <button className="Submit">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
