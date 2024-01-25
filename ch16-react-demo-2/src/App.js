import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Links from "./components/Links";
import Button from "./components/Button";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Header></Header>
        <>
          <Button text={"Button 1"} className="important" />
          <Button text={"Button 2"} className="danger" />
          <Button text={"Button 3"} className="demo" />
        </>
        <a>Link 1</a>
        <a>Link 1</a>
        <a>Link 1</a>
        <Main></Main>
        <Footer></Footer>
      </>
    );
  }
}

export default App;
