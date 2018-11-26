import React from "react";

const CharComponent = props => {
  const style = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid green"
  };

  return (
    <div style={style} onClick={props.clicked}>
      {props.letter}
    </div>
  );
};

export default CharComponent;
