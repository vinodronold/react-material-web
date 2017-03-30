import React, { Component, PropTypes } from "react";
//import classnames from "classnames";
import { MDCRipple } from '@material/ripple/dist/mdc.ripple';
import "@material/button/dist/mdc.button.min.css";

const _propTypes = {
  accent: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  compact: PropTypes.bool,
  dense: PropTypes.bool,
  primary: PropTypes.bool,
  raised: PropTypes.bool
};

class Button extends Component {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    href: PropTypes.string,
    label: PropTypes.string.isRequired,
    dense: PropTypes.bool,
    raised: PropTypes.bool,
    compact: PropTypes.bool,
    primary: PropTypes.bool,
    accent: PropTypes.bool
  };

  static defaultProps = {
    type: 'button'
  };

  ripple = null;

  componentDidMount() {
    this.ripple = new MDCRipple(this._button);
  }

  componentWillUnmount() {
    this.ripple.destroy();
  }

  render() {
    const {
      type,
      href,
      label,
      className,
      dense,
      raised,
      compact,
      primary,
      accent,
      ...otherProps
    } = this.props;

    let classes = 'mdc-button';
    if (dense) classes += ' mdc-button--dense';
    if (raised) classes += ' mdc-button--raised';
    if (compact) classes += ' mdc-button--compact';
    if (primary) classes += ' mdc-button--primary';
    if (accent) classes += ' mdc-button--accent';
    if (className) classes += ` ${className}`;

    if (href) {
      return (
        <a
          href={href}
          className={classes}
          ref={n => this._button = n}
          {...otherProps}
        >
          {label}
        </a>
      );
    }

    return (
      <button
        type={type}
        className={classes}
        ref={n => this._button = n}
        {...otherProps}
      >
        {label}
      </button>
    );
  }
}

/*
const Button = (
  {
    accent,
    children,
    className,
    compact,
    dense,
    primary,
    raised,
    ...otherProps
  }
) => {
  const _baseClassName = "mdc-button";
  const _cls = classnames(
    _baseClassName,
    {
      [`${_baseClassName}--accent`]: accent,
      [`${_baseClassName}--compact`]: compact,
      [`${_baseClassName}--dense`]: dense,
      [`${_baseClassName}--primary`]: primary,
      [`${_baseClassName}--raised`]: raised
    },
    className
  );
  return <button className={_cls} {...otherProps}>{children}</button>;
};

Button.propTypes = _propTypes;
*/

export default Button;
