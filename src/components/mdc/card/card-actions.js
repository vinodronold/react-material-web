import React from 'react'
import { bool, node, string } from 'prop-types'
import classnames from 'classnames'
import { baseClassName } from './const'

const _propTypes = {
    children: node,
    className: string,
    dark: bool,
    vertical: bool
}

const CardActions = ({ children, className, dark, vertical, ...otherProps }) => {

    const _cls = classnames(
        [`${baseClassName}__actions`],
        { [`${baseClassName}__actions--vertical`]: vertical },
        className
    )

    const _actionChildren = React.Children.map(children, (action, idx) => {
        return React.cloneElement(action,
            {
                key: idx,
                dark,
                compact: action.props.compact || vertical,
                className: classnames(action.props.className, [`${baseClassName}__action`])
            }
        )
    })

    return (
        <section className={_cls} {...otherProps}>
            {_actionChildren}
        </section>
    )
}

CardActions.PropTypes = _propTypes

export default CardActions