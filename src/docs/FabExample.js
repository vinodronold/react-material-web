import React from "react";
import Fab from "../components/mdc/Fab";

const FabExample = ({ styles }) => {
  return (
    <div>
      <h3>FAB</h3>
      <section>
        <fieldset>
          <legend>Fabs</legend>
          <Fab style={styles} plain>favorite</Fab>
          <Fab style={styles}>favorite</Fab>
          <Fab style={styles} mini>favorite</Fab>
        </fieldset>
      </section>
    </div>
  );
};

export default FabExample;
