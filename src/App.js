import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    string: "",
    stringLength: 0
  };
  handleChange = event => {
    //this.setState({ string: event.target.value });
    //console.log(event.target.value);
    //console.log(event.target.value.length);
    this.setState({
      string: event.target.value,
      stringLength: event.target.value.length
    });
  };

  render() {
    const stringMap = this.state.string.split("");
    const stringArr = stringMap.map((char, index) => {
      return <CharComponent key={index} letter={char} />;
    });

    //deleteLetter = () => {};

    return (
      <div className="App">
        <ol>
          <li>
            When you click a CharComponent, it should be removed from the
            entered text.
          </li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <input type="text" onChange={this.handleChange} />
        <p>{this.state.stringLength}</p>
        <ValidationComponent textLength={this.state.stringLength} />
        {stringArr}
      </div>
    );
  }
}

export default App;
