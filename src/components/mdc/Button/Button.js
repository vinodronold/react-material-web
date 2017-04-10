import React, { Component } from 'react'
import { bool, node, string } from 'prop-types'
import classnames from "classnames"
import Ripple from '../ripple'
import { themeDark } from '../theme/const'

import "@material/button/dist/mdc.button.min.css"

class Button extends Component {

  static propTypes = {
    accent: bool,
    children: node,
    className: string,
    compact: bool,
    dark: bool,
    dense: bool,
    fab: bool,
    href: string,
    primary: bool,
    raised: bool,
    ripple: bool
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
