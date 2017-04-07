import React, { PropTypes } from "react"
import classnames from "classnames"
import { baseClassName } from './const'

const _propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    large: PropTypes.bool
}

const CardTitle = ({ children, className, large, ...otherProps }) => {

    const _cls = classnames(
        [`${baseClassName}__title`],
        { [`${baseClassName}__title--large`]: large },
        className
    )

    return (
        <h1 className={_cls} {...otherProps}>{children}</h1>
    )
}

CardTitle.PropTypes = _propTypes

export default CardTitle