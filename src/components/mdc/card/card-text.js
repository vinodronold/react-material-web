import React from 'react'
import {node, string} from 'prop-types'
import classnames from 'classnames'
import { baseClassName } from './const'

const _propTypes = {
    children: node,
    className: string
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