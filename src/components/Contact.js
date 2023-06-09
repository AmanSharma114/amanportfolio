import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useForm, ValidationError } from "@formspree/react";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const [state, handleSubmit] = useForm("mayzganr");
  if (state.succeeded) {
    return (
      <p
        style={{
          display: "block",
          backgroundColor: "#4CAF50",
          color: "white",
          fontSize: "50px",
          fontWeight: "bold",
          textAlign: "center",
          padding: "30px"
        }}
      >
        Thank you for connecting!
      </p>
    );
  }

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    onFormUpdate("phone", value);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form action="https://formspree.io/f/mayzganr" method="POST" onSubmit={handleSubmit}>
                    <label htmlFor="firstName">Full Name</label>
                    <input
                      id="firstName"
                      type="text"
                      name="firstName"
                      value={formDetails.firstName}
                      onChange={(e) => onFormUpdate("firstName", e.target.value)}
                    />

                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formDetails.email}
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                    />

                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formDetails.phone}
                      onChange={handlePhoneChange}
                    />

                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formDetails.message}
                      onChange={(e) => onFormUpdate("message", e.target.value)}
                    />

                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />

                    <button type="submit" disabled={state.submitting}>
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
