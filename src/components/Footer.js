import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* npm<MailchimpForm /> */}
          <Col xs={12} sm={6} className="text-center text-sm-end d-flex flex-column align-items-center justify-content-center">
            <div className="social-icon mb-3">
              <a href="https://www.linkedin.com/in/AmanSharma114/">
                <img src={navIcon1} alt="Icon" style={{ width: "30px" }} />
              </a>
              <a href="https://leetcode.com/Aman_Sharma114/">
                <img src={navIcon2} alt="Icon" style={{ width: "30px" }} />
              </a>
              <a href="https://www.codechef.com/users/amansharmam">
                <img src={navIcon3} alt="Icon" style={{ width: "30px" }} />
              </a>
            </div>
            <p className="footer-passage mb-0"> Step into my digital realm and embark on a journey through my creative universe. Witness the fusion of passion and innovation as I bring ideas to life through captivating projects. Let's connect, collaborate, and turn dreams into reality. Together, we can push boundaries, break barriers, and leave an indelible mark on the digital landscape. Join me on this exhilarating adventure and let's create something extraordinary!</p>
          </Col>

          <Col xs={12} sm={6} className="d-flex flex-column align-items-center">
            <img src={logo} alt="Logo" style={{ width: "200px" }} />
            <p className="text-center mb-0 mt-3">Made with ❤️ by Aman Sharma. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
