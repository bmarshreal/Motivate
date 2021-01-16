import React, { useState, useEffect } from "react";
import SlideIns from "./SlideIns";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function DataFetching(props) {
  const [quotes, setQuotes] = useState([]);
  const [scrollingPoint, setScrollingPoint] = useState(false);

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

  //Randomize/Shuffle fetched data.
  function shuffle(mappedQuotesWithIds) {
    var currentIndex = mappedQuotesWithIds.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = mappedQuotesWithIds[currentIndex];
      mappedQuotesWithIds[currentIndex] = mappedQuotesWithIds[randomIndex];
      mappedQuotesWithIds[randomIndex] = temporaryValue;
    }

    return mappedQuotesWithIds;
  }
  //Add ID's to fetched data.
  const mappedQuotesWithIds = quotes.map((mappedQuote) => {
    let id = uuidv4();
    const author = mappedQuote.author;
    const text = mappedQuote.text;
    return { myId: id, author, text };
  });

  // Use Randomizer

  shuffle(mappedQuotesWithIds);
  console.log(mappedQuotesWithIds);

  const filteredQuotes = mappedQuotesWithIds.filter(
    (processedQuotes, index) => {
      return index < 2;
    }
  );

  // console.log(filteredQuotes);
  //Trigger Quote Animations at certain scroll points
  const scrollerOne = (event) => {
    let scrollEX = Math.round(window.scrollY);
    if (scrollEX > 0 && scrollEX < 150) {
      setScrollingPoint(true);
    }
    if (scrollEX > 200) {
      setScrollingPoint(true);
    }
    event.preventDefault();
    console.log(window.scrollY);
  };

  window.addEventListener("scroll", scrollerOne);

  return (
    <div>
      <SlideIns
        filteredQuotes={filteredQuotes}
        scrollingPoint={scrollingPoint}
      />
    </div>
  );
}

export default DataFetching;
