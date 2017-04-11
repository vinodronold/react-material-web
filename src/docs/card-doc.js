import React from "react";
import { Card, CardHeader, CardTitle, CardSubTitle, CardText, CardActions } from "../components/mdc/card";
import Button from '../components/mdc/button';

const CardDoc = () => {
    const styles = {
        outerDiv: { padding: 10 },
        container: { padding: 10, display: 'flex', flexWrap: 'wrap' },
        item: { margin: 10, flexGrow: 1, height: 'auto', width: 350 }
    }
    return (
        <div style={styles.outerDiv}>
            <h3>Cards</h3>
            <section style={styles.container}>
                <Card style={styles.item}>
                    <CardHeader>
                        <CardTitle large> Basic Card </CardTitle>
                        <CardSubTitle> Some subtitle </CardSubTitle>
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
                <Card style={styles.item}>
                    <CardHeader
                        title={'Avatar Cards'}
                        subtitle={'Some subtitle'}
                        avatar={'https://dummyimage.com/100x100/bdbdbd/222&text=A'}
                    />
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
                <Card style={styles.item}>
                    <CardHeader>
                        <CardTitle large> Cards Title </CardTitle>
                        <CardSubTitle> Cards with Verital Button </CardSubTitle>
                    </CardHeader>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </CardText>
                    <CardActions vertical>
                        <Button raised primary compact>Action 1</Button>
                        <Button raised primary accent>Action 2</Button>
                        <Button raised>Action 3</Button>
                    </CardActions>
                </Card>
                <Card dark style={styles.item}>
                    <CardHeader>
                        <CardTitle large> Dard Cards Title </CardTitle>
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
            </section>
        </div>
    );
};

export default CardDoc;