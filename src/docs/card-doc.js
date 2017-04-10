import React from "react";
import { Card, CardHeader, CardTitle, CardSubTitle, CardText, CardActions } from "../components/mdc/card";
import Button from '../components/mdc/button';

const CardDoc = () => {
    const styles = {
        padding: 10
    }
    return (
        <div style={styles}>
            <h3>Cards</h3>
            <section>
                <fieldset>
                    <legend>Cards</legend>
                    <Card dark>
                        <CardHeader>
                            <CardTitle large> Cards Title </CardTitle>
                            <CardSubTitle> Cards Sub Title </CardSubTitle>
                        </CardHeader>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </CardText>
                        <CardActions>
                            <Button raised primary compact>Action 1</Button>
                            <Button raised primary accent>Action 2</Button>
                            <Button raised>Action 3</Button>
                        </CardActions>
                    </Card>
                </fieldset>
            </section>
        </div>
    );
};

export default CardDoc;