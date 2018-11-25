import React from "react";

const CharComponent = props => {
  const style = {
    display: "inlineBlock",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid green"
  };

  return <div style={style}>{props.letter}</div>;
};

export default CharComponent;
