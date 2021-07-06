import React from "react";
import ReactWordcloud from "react-wordcloud";

import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

import words from "./words";

const resizeStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0"
};

export default function WordCloud() {
  return (
    <div>
      <div style={{ width: "100%", height: "100%" }}>
          <ReactWordcloud words={words} />
        </div>
    </div>
  );
}

