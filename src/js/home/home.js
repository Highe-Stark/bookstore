import React from 'react';
import { NavLink } from 'react-router-dom';
import {Grid, Button, Card, Image} from 'semantic-ui-react';
import Le_Petit_Prince from '../../img/Le_Petit_Prince.jpg';
import Bible from '../../img/Bible.jpg';

var books = [[Le_Petit_Prince, "Prince"], [Bible, 'Jesus']];

class Home extends React.Component {
    

    render() {
        return (
            /*<Grid column={3} divided>
                {books.map(book => (
                    <Grid.Column key={book[1]}>
                        <Card>
                            <Image src={book[0]} rounded />
                            <Card.Content>
                                {book[1]}
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                ))}
            </Grid>*/
            <Card.Group>
                {books.map(book => (
                    <Card>
                        <Image src={book[0]} size="small" rounded />
                        <Card.Content>
                            <Card.Header>
                                {book[1]}
                            </Card.Header>
                        </Card.Content>
                    </Card>
                ))}
            </Card.Group>
        );
    }
}

export default Home;