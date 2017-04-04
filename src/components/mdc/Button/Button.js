import React, { Component, PropTypes } from "react"
import classnames from "classnames"
import Ripple from '../Ripple'
import { themeDark } from '../theme/const'

import "@material/button/dist/mdc.button.min.css"

class Button extends Component {

  static propTypes = {
    accent: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    compact: PropTypes.bool,
    dark: PropTypes.bool,
    dense: PropTypes.bool,
    fab: PropTypes.bool,
    href: PropTypes.string,
    primary: PropTypes.bool,
    raised: PropTypes.bool,
    ripple: PropTypes.bool
  }

  render() {
    const {
    accent,
      children,
      className,
      compact,
      dark,
      dense,
      fab,
      href,
      primary,
      raised,
      ripple,
      ...otherProps
  } = this.props

    const _baseClassName = "mdc-button"
    const _cls = classnames(
      _baseClassName,
      {
        [`${_baseClassName}--accent`]: accent,
        [`${_baseClassName}--compact`]: compact,
        [`${_baseClassName}--dense`]: dense,
        [`${_baseClassName}--primary`]: primary,
        [`${_baseClassName}--raised`]: raised,
        [`${_baseClassName}--${themeDark}`]: dark
      },
      className
    )
    const _props = { ...otherProps, "className": _cls, "ref": node => this.node = ripple && node }
    if (href) {
      return <a href={href} {..._props}>{children}</a>
    }
    return <button {..._props}>{children}</button>
  }
}

export default Ripple(Button)
