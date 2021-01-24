import React, { lazy, Suspense, useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Card, Spinner } from "react-bootstrap";
const QuoteSearchChild = lazy(() => import("./QuoteSearchChild"));

function Search(props) {
  const [quotes, setQuotes] = useState([]);
  const [searching, setSearching] = useState({
    text: "",
    author: "",
  });
  useEffect(() => {
    axios
      .get("https://type.fit/api/quotes/")
      .then((res) => {
        setQuotes(res.data);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  }, []);

  //Add ID's to fetched data.
  const mappedQuotesWithIds = quotes.map((mappedQuote) => {
    if (mappedQuote.author === null) {
      mappedQuote.author = "Unknown Author";
    }
    let id = uuidv4();
    const author = mappedQuote.author;
    const text = mappedQuote.text;
    return { myId: id, author, text };
  });

  // Use Randomizer------------------------------------------------------

  // console.log(mappedQuotesWithIds);

  function searcher(event) {
    const { name, value } = event.target;
    // console.log({ value });
    // console.log(searching);
    setSearching((prevSearch) => {
      return {
        ...prevSearch,
        [name]: value, //name --> author --> state
      };
    });
  }

  const searchedQuotes = mappedQuotesWithIds.filter((quote) => {
    return quote.author.toLowerCase().includes(searching.author.toLowerCase());
  });

  const quoteCards = searchedQuotes.map((quotes, index) => {
    return (
      <Card key={quotes.myId} border="dark" className="listCard">
        <Card.Header>Motivate!</Card.Header>
        <Card.Body className="listCardBody">
          <Card.Title>{quotes.author}</Card.Title>
          <Card.Text>{quotes.text}</Card.Text>
        </Card.Body>
      </Card>
    );
  });

  const filterCardsLimit = quoteCards.filter((card, index) => {
    return index < 50;
  });
  // console.log(searchedQuotes);
  return (
    <div>
      <Suspense
        fallback={
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        }
      >
        <QuoteSearchChild
          searching={searching}
          searcher={searcher}
          searchedQuotes={searchedQuotes}
          quoteCards={quoteCards}
          filterCardsLimit={filterCardsLimit}
        />
      </Suspense>
    </div>
  );
}

export default Search;
