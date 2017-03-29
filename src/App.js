import React, { Component } from "react";
import ButtonExample from "./docs/ButtonExample";
import FabExample from "./docs/FabExample";
import "./App.css";

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
        <ButtonExample styles={styles} />
        <FabExample styles={styles} />
      </div>
    );
  }
}

export default App;
