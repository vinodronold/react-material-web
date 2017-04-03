import React, {PropTypes} from "react";
import classnames from "classnames";
import { baseClassName } from './const';

import "@material/card/dist/mdc.card.min.css";

const _propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

const Card = ({ children, className, ...otherProps }) => {
    const _cls = classnames(
        [`${baseClassName}__title`],
        className
    );

    return (
        <div className={_cls} {...otherProps}>{children}</div>
    );
};

Card.PropTypes = _propTypes;

export default Card;