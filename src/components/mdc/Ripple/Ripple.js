import React, { Component } from "react";
//import { MDCRipple } from '@material/ripple/dist/mdc.ripple';

export default function Ripple(WrappedComponent) {
    
  return class extends Component {
/*
    componentDidMount() {
    this.ripple = new MDCRipple(this);
    }

    componentWillUnmount() {
    this.ripple.destroy();
    }
*/
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}