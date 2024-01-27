import React, { Component } from "react";
import axios from "axios";

class Child extends Component {
  constructor() {
    super();
    console.log("constructor ran, the component is born");
  }

  state = {};

  // componentDidMount() - lifecycle method in React class components that is invoked immediately after a component is inserted into the DOM, making it suitable for performing actions such as data fetching or setting up subscriptions.
  async componentDidMount() {
    console.log("HTML is now inside the dom");

    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    this.setState({ todo: data });
  }

  render() {
    console.log("render ran, HTML getting created", this.state);

    if (this.state.todo) {
      return <p>We have data</p>;
    }

    return <p>Loading...</p>;
  }
}

export default Child;
