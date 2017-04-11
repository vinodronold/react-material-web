import React from 'react'
import {node, string} from 'prop-types'
import classnames from 'classnames'
import { baseClassName } from './const'

const _propTypes = {
    children: node,
    className: string
}

const CardSubTitle = ({ children, className, ...otherProps }) => {

    const _cls = classnames(
        [`${baseClassName}__subtitle`],
        className
    )
    
    return (
        <h2 className={_cls} {...otherProps}>{children}</h2>
    )
}

CardSubTitle.PropTypes = _propTypes

export default CardSubTitle