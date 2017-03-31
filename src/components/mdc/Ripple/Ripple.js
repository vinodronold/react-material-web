import React, { Component } from "react";
import { MDCRipple } from '@material/ripple/dist/mdc.ripple';

/*
class Ripple extends Component{

    constructor(props) {
      super(props);
      this.ripple = null;
    };

    componentDidMount() {
      this.ripple = new MDCRipple(this._ref);
    };

    componentWillUnmount() {
      this.ripple.destroy();
    };

    render() {
      return <button className="mdc-button" ref={n => this._ref = n}>{this.props.children}</button>;
    };
};
*/

export default function Ripple(WrappedComponent) {

  return class extends Component {

    constructor(props) {
      super(props);
      this.ripple = null;
    };

    componentDidMount() {
      this.ripple = new MDCRipple(this._ref);
    }

    componentWillUnmount() {
      this.ripple.destroy();
    }

    render() {
      const props = Object.assign({}, this.props, {ref: n => this._ref = n})
      return <WrappedComponent {...props} />;
    }
  };
};

//export default Ripple;