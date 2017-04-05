import React, { PropTypes } from "react"
import classnames from "classnames"
import { baseClassName } from './const'

const _propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dark: PropTypes.bool,
    vertical: PropTypes.bool
}

const CardActions = ({ children, className, dark, vertical, ...otherProps }) => {

    const _cls = classnames(
        [`${baseClassName}__actions`],
        { [`${baseClassName}__actions--vertical`]: vertical },
        className
    )

    const _actionChildren = React.Children.map(children, (action, idx) => {
        console.log(action.props.compact)
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