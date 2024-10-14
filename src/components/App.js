import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstNameValue: "",
      secondNameValue: "",
      result: "",
    };

    this.handleclick = this.handleclick.bind(this);
    this.handleclear = this.handleclear.bind(this);
  }

  handleclick() {
    const { firstNameValue, secondNameValue } = this.state;
    console.log(firstNameValue, secondNameValue);

    const flame = [
      "Siblings",
      "Friends",
      "Love",
      "Affection",
      "Marriage",
      "Enemy",
    ];

    let name1 = firstNameValue.toLowerCase().split("");
    let name2 = secondNameValue.toLowerCase().split("");

    name1.forEach((curr, index) => {
      const indexPresent = name2.indexOf(curr);
      console.log(indexPresent);
      if (indexPresent !== -1) {
        name1[index] = "";
        name2[indexPresent] = "";
      }
    });

    name1 = name1.join("");
    name2 = name2.join("");

    const sumLength = name1.length + name2.length;

    const resultIndex = sumLength % 6;

    this.setState({ result: flame[resultIndex] });
  }

  handleclear() {
    this.setState({
      firstNameValue: "",
      secondNameValue: "",
      result: "",
    });
  }
  render() {
    return (
      <div id="main">
        {/* Do not remove the main div */}
        <input
          data-testid="input1"
          type="text"
          placeholder="Enter first name"
          value={this.state.firstNameValue}
          onChange={(e) => this.setState({ firstNameValue: e.target.value })}
        ></input>
        <input
          data-testid="input2"
          type="text"
          value={this.state.secondNameValue}
          placeholder="Enter second name"
          onChange={(e) => this.setState({ secondNameValue: e.target.value })}
        ></input>
        <button data-testid="calculate_relationship" onClick={this.handleclick}>
          Calculate Relationship Future
        </button>
        <button data-testid="clear" onClick={this.handleclear}>
          Clear
        </button>
        <h3 data-testid="answer">{this.state.result}</h3>
      </div>
    );
  }
}

export default App;
