import React from "react";
import Button from "../components/mdc/Button";

const ButtonExample = ({ styles }) => {
  return (
    <div>
      <h3>BUTTON</h3>
      <section>
        <fieldset>
          <legend>Flat Buttons</legend>
          <Button style={styles}>FLAT</Button>
          <Button style={styles} accent>ACCENT</Button>
          <Button style={styles} primary>PRIMARY</Button>
          <Button style={styles} compact>COMPACT</Button>
          <Button style={styles} dense>DENSE</Button>
        </fieldset>
        <fieldset>
          <legend>Raised Buttons</legend>
          <Button style={styles} raised>FLAT</Button>
          <Button style={styles} raised accent>ACCENT</Button>
          <Button style={styles} raised primary>PRIMARY</Button>
          <Button style={styles} raised compact>COMPACT</Button>
          <Button style={styles} raised dense>DENSE</Button>
        </fieldset>
      </section>
    </div>
  );
};

export default ButtonExample;
