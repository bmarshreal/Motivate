import React, { useState, useEffect } from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import MediaQuery from "react-responsive";
import DynaImage from "./DynaImage";

function SlideIns(props) {
  return (
    <div>
      {props.filteredQuotes.map((indexedQuotes, index) => (
        <ul className="slideContainer" key={indexedQuotes.myId}>
          {index < 1 ? (
            <Container fluid>
              <li className={props.scrollingPoint ? "leftSlide" : "hidden"}>
                {/* {indexedQuotes.myId + " ... "} */}

                <div className="leftSlideCluster">
                  <Row>
                    <Col>
                      <Image
                        className="leftSlideImg"
                        src="https://www.success.com/wp-content/uploads/legacy/sites/default/files/main/articles/inspiringquotesaboutbeingadreamer.jpg"
                        fluid
                      />
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
                        <Image
                          className="rightSlideImg"
                          src="https://www.success.com/wp-content/uploads/legacy/sites/default/files/main/articles/inspiringquotesaboutbeingadreamer.jpg"
                          fluid
                        />
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
                        <Image
                          className="rightSlideImg"
                          src="https://www.success.com/wp-content/uploads/legacy/sites/default/files/main/articles/inspiringquotesaboutbeingadreamer.jpg"
                          fluid
                        />
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
