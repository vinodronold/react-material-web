import React, { Component } from "react";
import ButtonExample from "./docs/ButtonExample";
import FabExample from "./docs/FabExample";
import CardExample from "./docs/CardExample";

import "./App.css";

class App extends Component {
  render() {
    const styles = {
      margin: 10
    };
    return (
      <div>
        <div className="App-header">
          <h2>React MDC Web</h2>
        </div>
        <div style={styles}>
          <ButtonExample styles={styles} />
          <FabExample styles={styles} />
          <CardExample />
        </div>
      </div>
    );
  }
}

export default App;
