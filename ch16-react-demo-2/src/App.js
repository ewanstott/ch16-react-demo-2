import React, { Component } from "react";
import News from "./components/News";

//Props - Passed from parent to child components.

class App extends Component {
  render() {
    return (
      <>
        <News news="CH16 is great" />
        <News news="Ewan is killing it!" />
      </>
    );
  }
}

export default App;
