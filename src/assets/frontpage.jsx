import React, { Component } from 'react';
import './CSS/homeStyle.min.css';
import {
  Button,
  Container,
  Row,
  Col,
  UncontrolledCarousel,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faCodepen,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelopeOpenText,
  faBolt,
} from '@fortawesome/free-solid-svg-icons';

const currencyPromoItems = [
  {
    src:
      'https://raw.githubusercontent.com/theREALaltoid/portfolio/master/public/images/currencyHome.jpg',
    caption: '',
  },
  {
    src:
      'https://raw.githubusercontent.com/theREALaltoid/portfolio/master/public/images/currencyDashboard.jpg',

    caption: '',
  },
  {
    src:
      'https://raw.githubusercontent.com/theREALaltoid/portfolio/master/public/images/currencyModal.jpg',

    caption: '',
  },
];

const plantrPromoItems = [
  {
    src:
      'https://raw.githubusercontent.com/theREALaltoid/portfolio/master/public/images/plantrHome.jpg',
    caption: '',
  },
  {
    src:
      'https://raw.githubusercontent.com/theREALaltoid/portfolio/master/public/images/plantrHomepage2.jpg',

    caption: '',
  },
  {
    src:
      'https://raw.githubusercontent.com/theREALaltoid/portfolio/master/public/images/plantrPageTwo.jpg',

    caption: '',
  },
];

export default class App extends Component {
  render() {
    return (
      <div>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />

        <div className="homePageUpper">
          <Container>
            <Row>
              <Col md="1" lg="1" />
              <Col md="10" lg="10">
                <img
                  src="https://raw.githubusercontent.com/theREALaltoid/portfolio/master/public/images/muhface.jpg"
                  className="img-responsive"
                  alt="Muh Face"
                />
                <h1>Hello!</h1>
                <h2>
                  My Name is
                  {' '}
                  <b>
                    Zachary Orona-Calvert.
                    <br />
                  </b>
                  <br />
                  {' '}
I&apos;m a web developer
                </h2>
                <h3 className="glow">Scroll to See More &darr;</h3>
              </Col>
              <Col md="1" lg="1" />
            </Row>
          </Container>
        </div>
        <div className="projects">
          <h1>
            Projects
            {' '}
            <FontAwesomeIcon
              className="FontAwesomeIcon"
              size="1x"
              icon={faBolt}
            />
          </h1>

          <Container>
            <Row>
              <Col md="12" lg="6">
                <h2>Currency</h2>
                <h3>
                  Currency is a React Application that allows a user
                  to track the value of their precious metal
                  investments
                </h3>
                <Row>
                  <Col md="12" lg="6">
                    <ul>
                      <li>&#9702; React/Redux</li>
                      <li>&#9702; ExpressJS</li>
                      <li>&#9702; HTML/SASS</li>
                    </ul>
                  </Col>
                  <Col md="12" lg="6">
                    <ul>
                      <li>&#9702; NodeJS</li>
                      <li>&#9702; MongooseJS</li>
                    </ul>
                  </Col>
                </Row>

                <Button
                  color="primary"
                  href="https://github.com/theREALaltoid/cur"
                >
                  View Source
                  {' '}
                  <FontAwesomeIcon
                    className="FontAwesomeIcon"
                    size="1x"
                    icon={faGithub}
                  />
                </Button>
              </Col>
              <Col md="12" lg="6">
                <UncontrolledCarousel items={currencyPromoItems} />
              </Col>
            </Row>
          </Container>
          <hr />
          <Container>
            <Row>
              <Col md="12" lg="6">
                <h2>Plantr</h2>
                <h3>
                  Plantr is a promo site for an app that would allow
                  people to connect with people in their community,
                  build relationships, gain access to fresh produce,
                  and reduce their carbon footprint.
                </h3>
                <ul>
                  <li>&#9702; React/Redux</li>
                  <li>&#9702; HTML/SASS</li>

                  <li>
                    <Button
                      color="primary"
                      href="https://github.com/theREALaltoid/Plantr"
                    >
                      View Source
                      {' '}
                      <FontAwesomeIcon
                        className="FontAwesomeIcon"
                        size="1x"
                        icon={faGithub}
                      />
                    </Button>
                  </li>
                </ul>
              </Col>

              <Col md="12" lg="6">
                <UncontrolledCarousel items={plantrPromoItems} />
              </Col>
              <br />
            </Row>
          </Container>
          <Container>
            <h2>Medium Writer</h2>
            <ul>
              <li>&#9702;Currated by Editors of Medium</li>
              <li>
                &#9702;Articles Published by
                {' '}
                <a
                  href="https://medium.com/better-programming
"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Better Programming
                </a>
                {' '}
                & The Largest Active Medium Publication,
                {' '}
                <a
                  href="https://medium.com/swlh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Startup
                </a>
              </li>
            </ul>
            <Button
              color="primary"
              href="https://medium.com/@zacharyoronacalvert"
            >
              View Profile
              {' '}
              <FontAwesomeIcon
                className="FontAwesomeIcon"
                size="1x"
                icon={faMedium}
              />
            </Button>
          </Container>
        </div>
        <div className="homePageMiddleBio">
          <Container>
            <br />
            <Row>
              <Col md="1" lg="1" />
              <Col md="10" lg="10">
                <h2>A Bit About Me:</h2>
                <h3>
                  Technology has been my passion since I was young, it
                  started when I first edited a configuration file to
                  get more in game credits. Ever since then I have
                  tried to understand how every piece of technology I
                  come into contact with works. I have been studying
                  front end software technologies for 2+ years. I can
                  quickly learn how to integrate technologies quickly
                  and I am my happiest when I am in a room with other
                  &quot;techies&quot; figuring out how to create
                  technological solutions to complicated problems.
                </h3>
              </Col>
              <Col md="1" lg="1" />
            </Row>
            <br />
            <Row>
              <Col md="1" lg="1" />
              <Col md="10" lg="10">
                <h2>My Skills:</h2>
                <h3>
                  I understand how to use Git to manage software
                  versioning, React/Redux and HTML/SASS to create
                  clean and appealing websites and, MongoDB,
                  Express.js and Node.js to create powerful data
                  management systems and backend services.
                </h3>
              </Col>
              <Col md="1" lg="1" />
            </Row>
          </Container>
        </div>

        <div className="homePageMiddleBio">
          <Container>
            <Row className="FontAwesomeIconRow">
              <Col md="1" lg="3" />
              <Col md="10" lg="6" className=" FontAwesomeIconGroup">
                <h2>My Contacts:</h2>
                <a
                  href="https://www.linkedin.com/in/zacharyoronacalvert"
                  rel="noopener noreferrer"
                  target="_blank"
                >
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
                <a
                  href="https://github.com/theREALaltoid"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="FontAwesomeIcon"
                    size="3x"
                    icon={faGithub}
                  />
                </a>
                <a
                  href="https://codepen.io/therealAltoid"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="FontAwesomeIcon"
                    size="3x"
                    icon={faCodepen}
                  />
                </a>
                <a
                  href="https://medium.com/@zacharyoronacalvert"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="FontAwesomeIcon"
                    size="3x"
                    icon={faMedium}
                  />
                </a>
              </Col>
              <Col md="1" lg="3" />
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
