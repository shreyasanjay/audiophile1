import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Alert  from "react-bootstrap/Alert";
const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };
  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3"></Popover.Header>
      <Popover.Body>
        Click this button to directly communicate with our team.
      </Popover.Body>
    </Popover>
  );
  return (
    <div>
      <Alert variant="info" className="info-al">
        Contact Us <br /> <p>We would love to hear from you...</p>
      </Alert>
    <div className="containercon">
      <form onSubmit={handleSubmit} method="POST" target="_blank">
        <div className="mb-3 pt-0">
          <label>Name</label>&nbsp;&nbsp;&nbsp;
          <input type="text" placeholder="Your name" name="name" className="" required />
        </div>
        <div className="mb-3 pt-0">
          <label>Email</label>&nbsp;&nbsp;&nbsp;
          <input type="email" placeholder="Your email" name="email" className="" required />
        </div>
        <div className="mb-3 pt-0">
          <label>Your Message</label>&nbsp;&nbsp;&nbsp;
          <textarea placeholder="Your message" name="message" className="area" required />
        </div>
        <div className="mb-3 pt-0">
          <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant="primary" type="submit" className="contactbtn">
              Send a Message
            </Button>
          </OverlayTrigger>
        </div>
      </form>
    </div>
    </div>
  );
};
export default ContactForm;
