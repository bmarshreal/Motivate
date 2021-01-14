import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function DataFetching(props) {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    axios
      .get("https://type.fit/api/quotes")
      .then((res) => {
        setQuotes(res.data);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  }, []);

  const mappedQuotesWithIds = quotes.map((mappedQuote) => {
    let id = uuidv4();
    const author = mappedQuote.author;
    const text = mappedQuote.text;
    return { myId: id, author, text };
  });
  console.log(mappedQuotesWithIds);

  const filteredQuotes = mappedQuotesWithIds.filter(
    (processedQuotes, index) => {
      return index < 100;
    }
  );

  return (
    <div>
      {filteredQuotes.map((indexedQuotes) => (
        <ul key={indexedQuotes.myId}>
          <li>
            {indexedQuotes.myId + " ... "}
            {indexedQuotes.author + ";  "}
            {indexedQuotes.text}
          </li>
        </ul>
      ))}
    </div>
  );
}

export default DataFetching;
