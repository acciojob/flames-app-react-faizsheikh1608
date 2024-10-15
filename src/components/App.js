import React, { useState } from "react";

const outputs = [
  "Friends",
  "Love",
  "Affection",
  "Marriage",
  "Enemy",
  "Siblings",
];

const App = () => {
  const [fn, setFn] = useState("");
  const [ln, setLn] = useState("");
  const [relation, setRelation] = useState("");

  const calculateBtnHandler = () => {
    if (fn.length == 0 || ln.length == 0) {
      return setRelation("Please Enter valid input");
    }

    console.log("heheh");
    let firstArr = fn.split("");
    let SecondArr = ln.split("");
    let nArr = [];

    for (let i = 0; i < firstArr.length; i++) {
      let flag = false;
      for (let j = 0; j < SecondArr.length; j++) {
        if (firstArr[i] === SecondArr[j]) {
          flag = true;
          SecondArr.splice(j, 1);
          break;
        }
      }

      if (!flag) {
        nArr.push(firstArr[i]);
      }
    }

    let tbc = (nArr.length + SecondArr.length) % 6;

    switch (tbc) {
      case 1:
        return setRelation("Friends");
      case 2:
        return setRelation("Love");
      case 3:
        return setRelation("Affection");
      case 4:
        return setRelation("Marriage");
      case 5:
        return setRelation("Enemy");
      case 0:
        return setRelation("Siblings");
    }
  };

  return (
    <div>
      <input
        name="name1"
        data-testid="input1"
        value={fn}
        onChange={(e) => {
          setFn(e.target.value);
        }}
        placeholder="Enter first name"
      />
      <input
        name="name2"
        data-testid="input2"
        value={ln}
        onChange={(e) => {
          setLn(e.target.value);
        }}
        placeholder="Enter second name"
      />
      <button
        data-testid="calculate_relationship"
        onClick={calculateBtnHandler}
      >
        Calculate Relationship Future
      </button>
      <button
        data-testid="clear"
        onClick={() => {
          setFn("");
          setLn("");
          setRelation("");
        }}
      >
        Clear
      </button>

      <h3 data-testid="answer">{relation}</h3>
    </div>
  );
};

export default App;

//kjshdkjhsdf

/*import React, { Component } from "react";
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
    if (firstNameValue.length === 0 || secondNameValue.length === 0) {
      this.setState({ result: "Please Enter valid input" });
      return;
    }
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
    console.log(resultIndex);

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
       
        <input
          data-testid="input1"
          type="text"
          placeholder="Enter first name"
          name="name1"
          value={this.state.firstNameValue}
          onChange={(e) => this.setState({ firstNameValue: e.target.value })}
        ></input>
        <input
          data-testid="input2"
          type="text"
          name="name2"
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
*/
