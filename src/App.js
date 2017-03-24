import React, { Component } from "react";
import "./App.css";
import Button from "./components/mdc/Button";

class App extends Component {
  render() {
    const styles = {
      margin: 10
    };
    return (
      <div className="App">
        <div className="App-header">
          <h2>React MDC Web</h2>
        </div>
          <h1>BUTTON</h1>
          <section>
            <fieldset>
              <legend>Flat Buttons</legend>
              <Button style={styles}>FLAT</Button>
              <Button style={styles} accent>FLAT ACCENT</Button>
              <Button style={styles} primary>FLAT PRIMARY</Button>
            </fieldset>
            <fieldset>
              <legend>Raised Buttons</legend>
              <Button style={styles} raised>FLAT</Button>
              <Button style={styles} raised accent>FLAT ACCENT</Button>
              <Button style={styles} raised primary>FLAT PRIMARY</Button>
            </fieldset>
          </section>
      </div>
    );
  }
}

export default App;
