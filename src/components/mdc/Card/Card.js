import React, { PropTypes } from "react"
import classnames from "classnames"
import { baseClassName } from './const'
import { themeDark } from '../theme/const'

import "./card.dark.css"
import "@material/card/dist/mdc.card.min.css"

const _propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}

const Card = ({ children, className, dark, ...otherProps }) => {
    const _cls = classnames(
        baseClassName,
        { [`${baseClassName}--${themeDark}`]: dark },
        className
    )

    const _applyDarkTheme = (cardItem, idx) => {
        if (cardItem.type.name === 'CardActions') {
            return React.cloneElement(cardItem, { key: idx, dark })
        }
        return React.cloneElement(cardItem, { key: idx })
    }

    const _cardChildren = React.Children.map(children, _applyDarkTheme)

    return (
        <div className={_cls} {...otherProps}>{_cardChildren}</div>
    )
}

Card.PropTypes = _propTypes

export default Card