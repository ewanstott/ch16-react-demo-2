import React, { Component } from "react";
import Spinner from "./components/Spinner";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {};

  async componentDidMount() {
    const { data } = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?lat=2.22&lon=2.22&appid={adef24c0d24a95065818997a98ddd457}"
    );
    // const { data } = await axios.get(https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={adef24c0d24a95065818997a98ddd457});
    console.log(data);
  }

  render() {
    return <Spinner />;
  }
}

export default App;
