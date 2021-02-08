import React, { useState, useEffect } from "react";
import SlideIns from "./SlideIns";
import QuoteSearch from "./QuoteSearch";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function DataFetching(props) {
  const [quotes, setQuotes] = useState([]);
  const [pics, setPics] = useState([]);
  const [scrollingPoint, setScrollingPoint] = useState(false);

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
    return () => {
      console.log("Quotes Mounted");
    };
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/collections/1084067/photos?per_page=45&w=414&h=316",
        {
          headers: {
            Authorization:
              "Client-ID NrsqWiVvB7s-DqWLn5CCLi9fqY2pR5MaNCN0Ibl35MA",
          },
        }
      )
      .then((res) => {
        setPics(res.data);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
    return () => {
      console.log("Pictures Mounted");
    };
  }, []);

  let apiRe = pics.map((pic, index) => {
    return pic.urls.regular;
  });

  // console.log(apiRe);

  //--------------------------------------------------------------------
  //Randomize/Shuffle fetched data.
  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  //Add ID's to fetched data.
  const mappedQuotesWithIds = quotes.map((mappedQuote) => {
    let id = uuidv4();
    const author = mappedQuote.author;
    const text = mappedQuote.text;
    return { myId: id, author, text };
  });

  // Use Randomizer------------------------------------------------------
  shuffle(apiRe);
  shuffle(mappedQuotesWithIds);
  // console.log(mappedQuotesWithIds);
  // console.log(apiRe);

  const filteredPics = apiRe.filter((pic, index) => {
    return index < 2;
  });

  const filteredQuotes = mappedQuotesWithIds.filter(
    (processedQuotes, index) => {
      return index < 2;
    }
  );
  // console.log(filteredPics);
  // console.log(filteredQuotes);
  //Trigger Quote Animations at certain scroll points
  const scrollerOne = (event) => {
    let scrollEX = Math.round(window.scrollY);
    if (scrollEX > 2300 && scrollEX < 2450) {
      setScrollingPoint(true);
    }
    if (scrollEX > 200) {
      setScrollingPoint(true);
    }

    // console.log(window.scrollY);
  };

  window.addEventListener("scroll", scrollerOne);

  <QuoteSearch mapped={filteredQuotes} />;
  return (
    <div>
      <SlideIns
        filteredQuotes={filteredQuotes}
        scrollingPoint={scrollingPoint}
        photos={filteredPics}
      />
    </div>
  );
}

export default DataFetching;
