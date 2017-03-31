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
        <fieldset>
          <legend>Disabled Raised Buttons</legend>
          <Button style={styles} disabled raised>FLAT</Button>
          <Button style={styles} disabled raised accent>ACCENT</Button>
          <Button style={styles} disabled raised primary>PRIMARY</Button>
          <Button style={styles} disabled raised compact>COMPACT</Button>
          <Button style={styles} disabled raised dense>DENSE</Button>
        </fieldset>
        <fieldset>
          <legend>Ripple Buttons</legend>
          <Button style={styles} ripple raised>FLAT</Button>
          <Button style={styles} ripple raised accent>ACCENT</Button>
          <Button style={styles} ripple raised primary>PRIMARY</Button>
          <Button style={styles} ripple raised compact>COMPACT</Button>
          <Button style={styles} ripple raised dense>DENSE</Button>
        </fieldset>
        <fieldset>
          <legend>Link Buttons</legend>
          <Button style={styles} raised href="#">FLAT</Button>
          <Button style={styles} raised accent href="#">ACCENT</Button>
          <Button style={styles} raised primary href="#"> PRIMARY</Button>
          <Button style={styles} raised compact href="#">COMPACT</Button>
          <Button style={styles} raised dense href="#">DENSE</Button>
        </fieldset>
      </section>
    </div>
  );
};

export default ButtonExample;
