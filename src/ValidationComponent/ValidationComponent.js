import React from "react";

const ValidationComponent = props => {
  return props.textLength > 5 ? <p>Text to long!</p> : <p>text to short</p>;
};

export default ValidationComponent;
