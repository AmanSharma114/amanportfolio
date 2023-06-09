import React from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <div style={{  backgroundColor: "#000000",
              padding: "10px",
              transition: "background-color 0.3s ease",
               }}>
            <h4>{title}</h4>
          </div>
          <span>{description}</span>
          <div style={{ marginTop: "10px" }}>
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: "#000000",
                color: "#ffffff",
                textDecoration: "none",
                fontWeight: "bold",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              View Project
            </a>
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: "#ffffff",
                color: "#000000",
                textDecoration: "none",
                fontWeight: "bold",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
