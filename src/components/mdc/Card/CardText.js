import React, { PropTypes } from "react"
import classnames from "classnames"
import { baseClassName } from './const'

const _propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}

const CardText = ({ children, className, ...otherProps }) => {

    const _cls = classnames(
        [`${baseClassName}__supporting-text`],
        className
    )

    return (
        <section className={_cls} {...otherProps}>
            {children}
        </section>
    )
}

CardText.PropTypes = _propTypes

export default CardText