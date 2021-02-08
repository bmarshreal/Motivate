import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MediaQuery from "react-responsive";

function SlideIns(props) {
  return (
    <div style={{ backgroundColor: "#fdfbf3" }}>
      {props.filteredQuotes.map((indexedQuotes, index) => (
        <ul id="slideContainer" key={indexedQuotes.myId}>
          {index < 1 ? (
            <Container className="slideBackgroundLeft" fluid>
              <li className={props.scrollingPoint ? "leftSlide" : "hidden"}>
                {/* {indexedQuotes.myId + " ... "} */}

                <div className="leftSlideCluster">
                  <Row>
                    <Col>
                      <img
                        className="leftSlideImg"
                        src={props.photos[0]}
                        alt="randomPic"
                      ></img>
                    </Col>
                    <Col>
                      <p className="leftSlideInAuthor">
                        Motivational Quote by{" "}
                        {indexedQuotes.author === null
                          ? (indexedQuotes.author = " Unknown Author...")
                          : indexedQuotes.author}
                      </p>
                      <p className="leftSlideText">{indexedQuotes.text}</p>
                    </Col>
                  </Row>
                </div>
                <hr></hr>
              </li>
            </Container>
          ) : (
            <Container fluid>
              <li className={props.scrollingPoint ? "rightSlide" : "hidden"}>
                {/* {indexedQuotes.myId + " ... "} */}

                <div className="rightSlideCluster">
                  <Row>
                    <MediaQuery query="(max-device-width: 500px)">
                      <Col>
                        <img
                          className="rightSlideImg"
                          src={props.photos[1]}
                          alt="randomPic"
                        ></img>
                      </Col>
                      {/* //Insert any components/html here that you want rendered
                      thats below 1024px */}
                    </MediaQuery>
                    <Col>
                      <p className="rightSlideInAuthor">
                        {" "}
                        Motivational Quote by{" "}
                        {indexedQuotes.author === null
                          ? (indexedQuotes.author = " Unknown Author...")
                          : indexedQuotes.author}
                      </p>
                      <p className="rightSlideText">{indexedQuotes.text}</p>
                    </Col>
                    <MediaQuery query="(min-device-width: 500px)">
                      <Col>
                        <img
                          className="rightSlideImg"
                          src={props.photos[1]}
                          alt="randomPic"
                        ></img>
                      </Col>
                      {/* //Insert any components/html here that you want rendered
                      thats below 1024px */}
                    </MediaQuery>
                  </Row>
                </div>

                <hr></hr>
              </li>
            </Container>
          )}
        </ul>
      ))}
    </div>
  );
}

export default SlideIns;
