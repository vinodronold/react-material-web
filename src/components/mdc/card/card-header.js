import React from 'react'
import {node, string} from 'prop-types'
import classnames from 'classnames'
import { baseClassName } from './const'

const _propTypes = {
    children: node,
    className: string
}

const CardHeader = ({ children, className, ...otherProps }) => {

    const _cls = classnames(
        [`${baseClassName}__primary`],
        className
    )

    return (
        <section className={_cls} {...otherProps}>
            {children}
        </section>
    )
}

CardHeader.propTypes = _propTypes

export default CardHeader