import React, { Component } from "react";
import "./CSS/homeStyle.min.css";
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faCodepen
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
const currencyPromoItems = [
  {
    src:
      "https://raw.githubusercontent.com/theREALaltoid/portfolio/master/public/images/currencyHomepage.png",
    caption: ""
  },
  {
    src:
      "https://raw.githubusercontent.com/theREALaltoid/portfolio/master/public/images/whiteThemeDash.png",

    caption: "s "
  },
  {
    src:
      "https://raw.githubusercontent.com/theREALaltoid/portfolio/master/public/images/modal.png",

    caption: ""
  }
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      animating: false
    };
  }
  render() {
    const next = () => {
      if (this.state.animating) return;
      const nextIndex =
        this.state.activeIndex === currencyPromoItems.length - 1
          ? 0
          : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    };

    const previous = () => {
      if (this.state.animating) return;
      const nextIndex =
        this.state.activeIndex === 0
          ? currencyPromoItems.length - 1
          : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    };

    const goToIndex = newIndex => {
      if (this.state.animating) return;
      this.setState({ activeIndex: newIndex });
    };

    const currencyPromoSlides = currencyPromoItems.map(item => {
      return (
        <CarouselItem
          onExiting={() => this.setState({ animating: true })}
          onExited={() => this.setState({ animating: false })}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });
    return (
      <div>
        <div className="homePageUpper">
          <Container>
            <Row>
              <Col md="1" lg="1"></Col>
              <Col md="10" lg="10" className="colWithContent">
                <h1>Hello!</h1>
                <h2>
                  My Name is{" "}
                  <b>
                    Zachary
                    <br /> Orona-Calvert.
                  </b>
                  <br /> I'm a web developer
                </h2>
                <h3>Scroll to See More &darr;</h3>
              </Col>
              <Col md="1" lg="1"></Col>
            </Row>
          </Container>
        </div>
        <div className="projects">
          <Container>
            <Row>
              <Col md="12" lg="7" className="colWithContent">
                <h2>Currency</h2>
                <h3>
                  Currency is a React Application that allows a user to track
                  the value of their precious metal investments
                </h3>
              </Col>
              <Col md="12" lg="5">
                <Carousel
                  activeIndex={this.state.activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={currencyPromoItems}
                    activeIndex={this.state.activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {currencyPromoSlides}
                  <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={previous}
                  />
                  <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={next}
                  />
                </Carousel>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="homePageMiddleBio">
          <Container>
            <br />
            <Row>
              <Col md="1" lg="1"></Col>
              <Col md="10" lg="10" className="colWithContent">
                <h2>A Bit About Me:</h2>
                <h3>
                  I am currently looking for a start in the web development
                  industry. My happy place is being in a room with other
                  "techies" figuring out how to create technological solutions
                  to complicated problems.
                </h3>
              </Col>
              <Col md="1" lg="1"></Col>
            </Row>
            <br />
            <Row>
              <Col md="1" lg="1"></Col>
              <Col md="10" lg="10" className="colWithContent">
                <h2>My Skills:</h2>
                <h3>
                  I understand how to use Git to manage software versioning,
                  React to create clean and appealing websites and MongoDB,
                  Express.js and Node.js to create powerful data management
                  systems and backend services.
                </h3>
              </Col>
              <Col md="1" lg="1"></Col>
            </Row>
          </Container>
        </div>

        <div className="homePageMiddleBio">
          <Container>
            <Row className="FontAwesomeIconRow">
              <Col md="1" lg="3"></Col>
              <Col
                md="10"
                lg="6"
                className="colWithContent FontAwesomeIconGroup"
              >
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
      </div>
    );
  }
}
