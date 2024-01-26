import React, { Component } from "react";

class App extends Component {
  onBtnClick = () => {
    console.log("Btn clicked");
  };

  // event handling involves defining and attaching functions to handle user interactions, such as clicks or input changes,

  onTextInput = (e) => {
    console.log("User typed: ", e.target.value);
  };

  render() {
    return (
      <>
        <button onClick={this.onBtnClick}>Click me</button>
        <input type="text" onInput={this.onTextInput} />
      </>
    );
  }
}

export default App;
