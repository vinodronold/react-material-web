import React, { PropTypes } from "react";
import classnames from "classnames";
import "@material/fab/dist/mdc.fab.min.css";

const _propType = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  mini: PropTypes.bool,
  plain: PropTypes.bool
};

const Fab = (
  {
    children,
    className,
    mini,
    plain,
    ...otherProps
  }
) => {
  const _baseClassName = "mdc-fab";
  const _cls = classnames(
    _baseClassName,
    {
      [`${_baseClassName}--mini`]: mini,
      [`${_baseClassName}--plain`]: plain
    },
    "material-icons",
    className
  );
  return (
    <button className={_cls} {...otherProps} aria-label={children}>
      <span className={[`${_baseClassName}__icon`]}>
        {children}
      </span>
    </button>
  );
};

Fab.propTypes = _propType;

export default Fab;
