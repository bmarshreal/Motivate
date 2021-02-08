import React from "react";
import Navigate from "./Navigate";

function QuoteSearchChild(props) {
  return (
    <div>
      <div className="heroImage">
        <Navigate />
        <h1 className="heroHeader">Search</h1>
        <input
          className="searchBar"
          name="author" //name --> author --> state
          type="text"
          placeholder="Search By Author..."
          value={props.searching.author}
          onChange={props.searcher}
        ></input>
      </div>
      <div>
        {" "}
        {props.searching.author ? null : (
          <h3
            style={{
              position: "static",
              topMargin: "10rem",
              float: "none",
              paddingTop: "2rem",
            }}
          >
            Search for More Quotes...{" "}
          </h3>
        )}
        <ul>
          {props.searchedQuotes ? (
            <li className="listSearch">{props.filterCardsLimit}</li>
          ) : null}
        </ul>
      </div>
    </div>
  );
}
export default QuoteSearchChild;
