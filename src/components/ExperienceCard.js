import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import experince from "../assets/img/experience.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const ExperienceCard = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Student Matter Expert" ];
  const period = 2000;

  function handleClick() {
    window.open("https://drive.google.com/file/d/12g2vCeGMeZ0jFwRu5GNnkWmxD0vUHP4s/view?usp=sharing");
  }

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="exp" id="exp" >
      <Container>
        <Row className="aligh-items-center">
        <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={experince} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">EXPERIENCE</span>
                <h1>{`CHEGG INC.`} <br /><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Student Matter Expert" ]'><span className="wrap">{text}</span></span></h1>
                  <p>
● Solved over 100+ complex Computer Science-related questions with a success rate of 90% .<br />
● Developed problem-solving skills through extensive research and analysis.<br />
● Provided exceptional customer service through clear and concise communication.</p>
                  <button onClick={handleClick}>Work Certificate<ArrowRightCircle size={65} /></button>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}