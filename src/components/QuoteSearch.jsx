import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Navigate from "./Navigate";
import Footer from "./Footer";
import { Card } from "react-bootstrap";

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
      mappedQuote.author = "Uknown Author";
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

  // render(paginationBasic);

  // console.log(searchedQuotes);
  return (
    <div>
      <div className="heroImage">
        <Navigate />
        <h1 className="heroHeader">Search</h1>
        <input
          name="author" //name --> author --> state
          style={{ width: "20rem", borderRadius: "12px" }}
          type="text"
          placeholder="Search By Author..."
          value={searching.author}
          onChange={searcher}
        ></input>
      </div>
      <div>
        <ul>
          {searchedQuotes ? <li className="listSearch">{quoteCards}</li> : null}
        </ul>
      </div>
    </div>
  );
}

export default Search;
