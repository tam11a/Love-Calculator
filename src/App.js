import React, { Component } from "react";
import './App.css';
import AppTitle from "./AppTitle";
import From from './From';
import Result from "./Result";

class App extends Component {

  restart = () => {
    document.querySelector(".Result-div").classList.remove("Result-div-On");
    document.querySelector("i.refresh-icon").classList.remove("r-i-on");
    document.querySelector(".name1").value = "";
    document.querySelector(".name2").value = "";
  }

  render() {
    return (
      <div className="app">
          <i className="material-icons refresh-icon" onClick={this.restart}>restart_alt</i>
          <div className="app-container">
                <AppTitle />
                <From />
          </div>
          <Result />
      </div>
    );
  }
}

export default App;
