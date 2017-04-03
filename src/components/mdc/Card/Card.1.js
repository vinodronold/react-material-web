import React from "react";
import Button from '../Button';
import classnames from "classnames";

import "@material/card/dist/mdc.card.min.css";

const Card = ({ large }) => {

    const _baseClassName = "mdc-card";
    const _titleCls = classnames(
        [`${_baseClassName}__title`],
        { [`${_baseClassName}__title--large`]: large }
    );

    return (
        <div className={_baseClassName}>
            <section className={[`${_baseClassName}__primary`]}>
                <h1 className={_titleCls}>Title goes here</h1>
                <h2 className={[`${_baseClassName}__subtitle`]}>Subtitle here</h2>
            </section>
            <section className="mdc-card__supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat.
            </section>
            <section className="mdc-card__actions">
                <Button compact className="mdc-card__action">Action 1</Button>
                <Button compact className="mdc-card__action">Action 2</Button>
                <Button compact className="mdc-card__action">Action 3</Button>
            </section>
        </div>
    );
};

export default Card;