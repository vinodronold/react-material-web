import React from 'react'
import { string } from 'prop-types'
import classnames from 'classnames'
import { baseClassName } from './const'

const _propTypes = {
    children: string,
    className: string
}

const CardAvatar = ({ children, className, ...otherProps }) => {
    const _cls = classnames(
        [`${baseClassName}__avatar--display`],
        className
    )
    if (children) {
        return <img className={_cls} src={children} alt={'avatar'} />
    }
    return null
}

CardAvatar.PropTypes = _propTypes

export default CardAvatar