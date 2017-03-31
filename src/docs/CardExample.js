import React from "react";
import Card from "../components/mdc/Card";

const CardExample = ({ styles }) => {
    return (
        <div>
            <h3>Cards</h3>
            <section>
                <fieldset>
                    <legend>Cards</legend>
                    <Card large/>
                </fieldset>
            </section>
        </div>
    );
};

export default CardExample;