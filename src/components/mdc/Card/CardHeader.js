import React, { PropTypes } from "react";
import classnames from "classnames";
import { baseClassName } from './const';

const _propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

const CardHeader = ({ children, className, ...otherProps }) => {

    const _cls = classnames(
        [`${baseClassName}__primary`],
        className
    );

    return (
        <section className={_cls} {...otherProps}>
            {children}
        </section>
    )
};

CardHeader.propTypes = _propTypes;

export default CardHeader;