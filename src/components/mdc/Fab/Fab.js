import React, { Component, PropTypes } from "react"
import classnames from "classnames"
import Ripple from '../ripple'

import "@material/fab/dist/mdc.fab.min.css"

class Fab extends Component {

  static propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    mini: PropTypes.bool,
    plain: PropTypes.bool,
    ripple: PropTypes.bool
  }

  render() {
    const { children,
      className,
      mini,
      plain,
      ripple,
      ...otherProps
  } = this.props

    const _baseClassName = "mdc-fab"
    const _cls = classnames(
      _baseClassName,
      {
        [`${_baseClassName}--mini`]: mini,
        [`${_baseClassName}--plain`]: plain
      },
      "material-icons",
      className
    )
    
    const _props = { ...otherProps, "className": _cls, "ref": node => this.node = ripple && node }
    return (
      <button {..._props} aria-label={children}>
        <span className={[`${_baseClassName}__icon`]}>
          {children}
        </span>
      </button>
    )
  }

}

export default Ripple(Fab)
