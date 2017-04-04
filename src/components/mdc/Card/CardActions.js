import React, { PropTypes } from "react"
import classnames from "classnames"
import { baseClassName } from './const'

const _propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}

const CardActions = ({ children, className, dark, ...otherProps }) => {

    const _cls = classnames(
        [`${baseClassName}__actions`],
        className
    )

    const _actionChildren = React.Children.map(children, (action, idx) => {
        return React.cloneElement(action,
            {
                key: idx,
                dark,
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