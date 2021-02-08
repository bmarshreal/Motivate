import React from "react";
import Navigate from "./Navigate";
import Footer from "./Footer";
import Floater from "./Floater";

function About(props) {
  return (
    <div>
      <div className="heroImage">
        <Navigate />
        <h1 className="heroHeader">About</h1>
      </div>
      <Floater />
      <p className="about">
        It’s amazing how an uplifting quote or inspirational story can
        completely change your day, and sometimes your life. One quote that
        touches your heart or reminds you of your dreams can inspire steps that
        would otherwise remain untaken and stir new perspectives on life and
        possibilities. Insight of the Day was created to spread inspiration
        through something small, on a large scale. Though there are a ton of
        different ‘quote websites’, on this page you’ll always find a wealth of
        inspiring, motivating and insightful quotes – thoughtfully chosen with
        you and your dreams in mind.
      </p>
      <Footer />
    </div>
  );
}

export default About;
