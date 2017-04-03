import React from "react";
import { Card, CardHeader, CardTitle, CardSubTitle, CardText, CardActions } from "../components/mdc/Card";
import Button from '../components/mdc/Button';

const CardExample = ({ styles }) => {
    return (
        <div>
            <h3>Cards</h3>
            <section>
                <fieldset>
                    <legend>Cards</legend>
                    <Card>
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
                            <Button raised primary compact accent>Action 2</Button>
                            <Button raised compact>Action 3</Button>
                        </CardActions>
                    </Card>
                </fieldset>
            </section>
        </div>
    );
};

export default CardExample;