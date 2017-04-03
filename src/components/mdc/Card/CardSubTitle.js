import React, { PropTypes } from "react";
import classnames from "classnames";
import { baseClassName } from './const';

const _propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

const CardSubTitle = ({ children, className, ...otherProps }) => {

    const _cls = classnames(
        [`${baseClassName}__subtitle`],
        className
    );

    return (
        <h2 className={_cls} {...otherProps}>{children}</h2>
    )
};

CardSubTitle.PropTypes = _propTypes;

export default CardSubTitle;