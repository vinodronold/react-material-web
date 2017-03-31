import React, { PropTypes } from "react";
import classnames from "classnames";
import "@material/button/dist/mdc.button.min.css";
//import Ripple from '../Ripple';

/*
class Button extends Component {

  static propTypes = {
    accent: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    compact: PropTypes.bool,
    dense: PropTypes.bool,
    primary: PropTypes.bool,
    raised: PropTypes.bool
  };

  render() {
    const {
    accent,
      children,
      className,
      compact,
      dense,
      primary,
      raised,
      ...otherProps
  } = this.props;

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

};
*/

const _propTypes = {
  accent: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  compact: PropTypes.bool,
  dense: PropTypes.bool,
  primary: PropTypes.bool,
  raised: PropTypes.bool
};


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


export default Button;
