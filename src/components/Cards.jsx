import React from "react";
import { Button, Card, CardDeck } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Cards(params) {
  return (
    <div className="cardsIntro" style={{ backgroundColor: "#FEFBF7" }}>
      <div className="cardsContainer">
        <CardDeck className="cardDeckContainer">
          <Card>
            <Card.Img
              className="card-img"
              variant="top"
              src="https://www.wikihow.com/images/thumb/3/32/Motivate-Yourself-Step-12-Version-5.jpg/aid23823-v4-728px-Motivate-Yourself-Step-12-Version-5.jpg.webp"
            />
            <Card.Body>
              <Card.Title>Motivation Wiki</Card.Title>
              <Card.Text>
                Here is a simple wiki about motivating one's self.
              </Card.Text>
              <Button
                style={{
                  fontWeight: 600,
                  backgroundColor: "#E7F24A",
                  border: "none",
                  color: "#36390A",
                }}
                href="https://www.wikihow.com/Motivate-Yourself"
                // variant="warning"
              >
                Check it Out!
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              className="card-img"
              variant="top"
              src="https://media.istockphoto.com/photos/bloggingblog-concepts-ideas-with-worktable-picture-id922745190?k=6&m=922745190&s=612x612&w=0&h=qBmau_GKQZasMW14NJBp3u2vU-f5YFCcN1N71Exa8iE="
            />
            <Card.Body>
              <Card.Title>A Blog for Inspiration and Strategy</Card.Title>
              <Card.Text>An Inspiring Blog I Personally Recommend</Card.Text>
              <Button
                href="https://www.marcandangel.com/"
                style={{
                  fontWeight: 600,
                  backgroundColor: "#E7F24A",
                  border: "none",
                  color: "#36390A",
                }}
                // variant="warning"
              >
                Check it Out!
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              className="card-img"
              variant="top"
              src="https://images-na.ssl-images-amazon.com/images/I/51S9Mvr3kFL._SY498_BO1,204,203,200_.jpg"
            />
            <Card.Body>
              <Card.Title>Books on Self Development</Card.Title>
              <Card.Text>
                A Quick Amazon Search for Books on Self Motivation!
              </Card.Text>
              <Button
                style={{
                  fontWeight: 600,
                  backgroundColor: "#E7F24A",
                  border: "none",
                  color: "#36390A",
                }}
                href="https://www.amazon.com/Year-Positive-Thinking-Inspiration-Courage/dp/1641522410/ref=sr_1_1_sspa?crid=A859A4A7FU0W&dchild=1&keywords=self+motivation+books&qid=1610990364&sprefix=self+motiv%2Caps%2C201&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFSTDZIR0I3N0ZETlkmZW5jcnlwdGVkSWQ9QTA3ODgzMDRBRlpEU0lYWlM1QUEmZW5jcnlwdGVkQWRJZD1BMDUxMjE5NzJDRDFWVEc1UzVQTlMmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl"
                // variant="warning"
              >
                Check it Out!
              </Button>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    </div>
  );
}

export default Cards;
