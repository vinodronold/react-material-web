import React, { PropTypes } from "react";
import classnames from "classnames";
import "@material/button/dist/mdc.button.min.css";

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
  const _cls = classnames(
    "mdc-button",
    {
      "mdc-button--accent": accent,
      "mdc-button--compact": compact,
      "mdc-button--dense": dense,
      "mdc-button--primary": primary,
      "mdc-button--raised": raised
    },
    className
  );
  return <button className={_cls} {...otherProps}>{children}</button>;
};

Button.propTypes = {
  accent: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  compact: PropTypes.bool,
  dense: PropTypes.bool,
  primary: PropTypes.bool,
  raised: PropTypes.bool
};

export default Button;
