import React, { Component } from "react";
import "./CSS/homeStyle.min.css";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faCodepen
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
export default class App extends Component {
  render() {
    return (
      <div className="homePageUpper">
        <Container>
          <h1>Hello!</h1>
          <Row>
            <Col md="1" lg="3"></Col>
            <Col md="10" lg="6" className="colWithContent">
              <h2>
                I'm <b>Zachary Orona-Calvert.</b> <br /> I'm a web developer
              </h2>
            </Col>
            <Col md="1" lg="3"></Col>
          </Row>
          <br />
          <Row>
            <Col md="1" lg="3"></Col>
            <Col md="10" lg="6" className="colWithContent">
              <h2>A Bit About Me:</h2>
              <h3>
                I am currently looking for a start in the web developement
                industry. My happy place is being in a room with other "techies"
                figuring out how to create technological solutions to
                complicated problems.
              </h3>
            </Col>
            <Col md="1" lg="3"></Col>
          </Row>
          <br />
          <Row>
            <Col md="1" lg="3"></Col>
            <Col md="10" lg="6" className="colWithContent">
              <h2>My Skills:</h2>
              <h3>
                I understand how to use Git to manage software versioning, React
                to create clean and appealing websites and MongoDB, Express.js
                and Node.js to create powerful data management systems and
                backend services.
              </h3>
            </Col>
            <Col md="1" lg="3"></Col>
          </Row>
          <br />
          <Row className="FontAwesomeIconRow">
            <Col md="1" lg="3"></Col>
            <Col md="10" lg="6" className="colWithContent FontAwesomeIconGroup">
              <h2>My Contacts:</h2>
              <a href="https://www.linkedin.com/in/zacharyoronacalvert">
                <FontAwesomeIcon
                  className="FontAwesomeIcon"
                  size="3x"
                  icon={faLinkedin}
                />
              </a>
              <a href="mailto:zacharycodes@protonmail.com">
                <FontAwesomeIcon
                  className="FontAwesomeIcon"
                  size="3x"
                  icon={faEnvelopeOpenText}
                />
              </a>
              <a href="https://github.com/theREALaltoid">
                <FontAwesomeIcon
                  className="FontAwesomeIcon"
                  size="3x"
                  icon={faGithub}
                />
              </a>
              <a href="https://codepen.io/therealAltoid">
                <FontAwesomeIcon
                  className="FontAwesomeIcon"
                  size="3x"
                  icon={faCodepen}
                />
              </a>
            </Col>
            <Col md="1" lg="3"></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
