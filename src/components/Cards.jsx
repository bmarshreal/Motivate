import React, { useState } from "react";
import { Button, Card, CardDeck } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Cards(params) {
  const [scrollingPointTwo, setScrollingPointTwo] = useState(false);

  const scrollerTwo = (event) => {
    let scrollEX = Math.round(window.scrollY);
    if (scrollEX > 200) {
      setScrollingPointTwo(true);
    }

    console.log(window.scrollY);
    console.log(scrollingPointTwo);
  };

  window.addEventListener("scroll", scrollerTwo);

  return (
    <div className="cardsIntro">
      <div className="cardsContainer">
        <CardDeck>
          <Card>
            <Card.Img
              style={{ height: "380px" }}
              variant="top"
              src="https://www.wikihow.com/images/thumb/3/32/Motivate-Yourself-Step-12-Version-5.jpg/aid23823-v4-728px-Motivate-Yourself-Step-12-Version-5.jpg.webp"
            />
            <Card.Body>
              <Card.Title>Motivation Wiki</Card.Title>
              <Card.Text>
                Here is a simple wiki about motivating one's self from start to
                finish!
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button
                style={{ fontWeight: 600 }}
                href="https://www.wikihow.com/Motivate-Yourself"
                variant="warning"
              >
                Check it Out!
              </Button>{" "}
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              style={{ height: "380px" }}
              variant="top"
              src="https://addicted2success.com/wp-content/uploads/2020/12/5-Powerful-Reasons-Why-You-Should-Write-Down-Your-Goals-400x240.png"
            />
            <Card.Body>
              <Card.Title>A Blog for Inspiration and Strategy</Card.Title>
              <Card.Text>An Inspiring Blog I Personally Recommend</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button
                href="https://www.marcandangel.com/"
                style={{ fontWeight: 600 }}
                variant="warning"
              >
                Check it Out!
              </Button>{" "}
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              style={{ height: "380px" }}
              variant="top"
              src="https://images-na.ssl-images-amazon.com/images/I/51S9Mvr3kFL._SY498_BO1,204,203,200_.jpg"
            />
            <Card.Body>
              <Card.Title>Books on Self Development</Card.Title>
              <Card.Text>
                A Quick Amazon Search for Books on Self Motivation!
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button
                style={{ fontWeight: 600 }}
                href="https://www.amazon.com/Year-Positive-Thinking-Inspiration-Courage/dp/1641522410/ref=sr_1_1_sspa?crid=A859A4A7FU0W&dchild=1&keywords=self+motivation+books&qid=1610990364&sprefix=self+motiv%2Caps%2C201&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFSTDZIR0I3N0ZETlkmZW5jcnlwdGVkSWQ9QTA3ODgzMDRBRlpEU0lYWlM1QUEmZW5jcnlwdGVkQWRJZD1BMDUxMjE5NzJDRDFWVEc1UzVQTlMmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl"
                variant="warning"
              >
                Check it Out!
              </Button>{" "}
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    </div>
  );
}

export default Cards;
