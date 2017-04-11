import React from 'react'
import { node, string, bool } from 'prop-types'
import CardTitle from './card-title'
import CardSubTitle from './card-sub-title'
import CardAvatar from './card-avatar'
import classnames from 'classnames'
import { baseClassName } from './const'

import './card.avatar.css'

const _propTypes = {
    avatar: string,
    children: node,
    className: string,
    large: bool,
    subtitle: string,
    title: string
}

const CardHeader = ({ avatar, children, className, large, subtitle, title, ...otherProps }) => {

    const _display_avatar = avatar => avatar.length > 0

    const _cls_avatar = classnames(
        { [`${baseClassName}__avatar`]: _display_avatar }
    )
    const _cls = classnames(
        [`${baseClassName}__primary`],
        className
    )

    if (children) {
        return (
            <section className={_cls} {...otherProps}>
                {children}
            </section>
        )
    }

    return (
        <div className={_cls_avatar}>
            <section className={_cls} {...otherProps}>
                <CardAvatar>{avatar}</CardAvatar>
                <CardTitle>{title}</CardTitle>
                <CardSubTitle>{subtitle}</CardSubTitle>
            </section >
        </div>
    )
}

CardHeader.propTypes = _propTypes

export default CardHeader