import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projectimg4 from "../assets/img/projectimg4.png";
import projectimg5 from "../assets/img/projectimg5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "FITX - GYM WEBSITE",
      description: "Designed a fitness website with gym advertisement, fitness-related knowledge, MySQL database integration for gym membership details, and an e-commerce page for purchasing fitness products.",
      imgUrl: projImg1,
    },
    {
      title: "SHOW-BOX-OFFICE",
      description: "Developed a REACT.JS-based app with API integration for fetching TV show and actor data , and a Starred page for users to track their favorite shows.",
      imgUrl: projImg2,
    },
    {
      title: "WEBCHAT",
      description: "Created a real-time chat app with sign-up, login, logout, messaging, profile updating, including multiple chatroom functionality.",
      imgUrl: projImg3,
    },
    {
      title: "Online Code Editor",
      description: "Designed a user-friendly online code editor with React, enabling seamless coding and execution of HTML, CSS, and JavaScript for a dynamic development experience.",
      imgUrl: projectimg4,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "SORTING VISUALIZER",
      description: "Developed a web application to visualize how various sorting algorithms work",
      imgUrl: projectimg5,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>In addition to my academic qualifications, I have gained proficiency in languages such as
            Java, C/C++, JavaScript, and web technologies such as HTML, CSS, JavaScript, PHP, and
            MySQL. I am also well-versed in Data Structures and Algorithm and have experience
            working with the ReactJS framework, GIT, GITHUB AND VS CODE.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
              
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}