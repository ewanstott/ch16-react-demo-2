import React, { Component } from "react";

class App extends Component {
  // STATE is for managing a component's internal data and triggering re-renders based on changes.
  state = { count: 1 };

  onCountClick = () => {
    // this.setState -> function used to update a component's state, triggering a re-render and ensuring state changes are handled asynchronously.
    console.log("onCountClick Started: ");
    this.setState({ count: this.state.count + 1, clicked: true });
  };

  //use this.state to get from local context, instead of this.props which gets from parent
  render() {
    //destrucutre:
    console.log(this.state);
    const { count } = this.state;

    return <p onClick={this.onCountClick}>{count}</p>;
  }
}

//
export default App;
