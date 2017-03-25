import React, { Component } from "react";
import "./App.css";
import Button from "./components/mdc/Button";
import Fab from "./components/mdc/Fab";

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
          <h3>BUTTON</h3>
          <section>
            <fieldset>
              <legend>Flat Buttons</legend>
              <Button style={styles}>FLAT</Button>
              <Button style={styles} accent>ACCENT</Button>
              <Button style={styles} primary>PRIMARY</Button>
            </fieldset>
            <fieldset>
              <legend>Raised Buttons</legend>
              <Button style={styles} raised>FLAT</Button>
              <Button style={styles} raised accent>ACCENT</Button>
              <Button style={styles} raised primary>PRIMARY</Button>
            </fieldset>
            <fieldset>
              <legend>Compact Buttons</legend>
              <Button style={styles} raised compact>FLAT</Button>
              <Button style={styles} raised compact accent>ACCENT</Button>
              <Button style={styles} raised compact primary>PRIMARY</Button>
            </fieldset>
            <fieldset>
              <legend>Dense Buttons</legend>
              <Button style={styles} raised dense>FLAT</Button>
              <Button style={styles} raised dense accent>ACCENT</Button>
              <Button style={styles} raised dense primary>PRIMARY</Button>
            </fieldset>
          </section>

          <h3>FAB</h3>
          <section>
            <fieldset>
              <legend>Fab</legend>
              <Fab style={styles}>FLAT</Fab>
            </fieldset>
          </section>
      </div>
    );
  }
}

export default App;
