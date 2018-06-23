'use strict';

import React from 'react';
import {Grid, Image, Button, Header, Icon} from 'semantic-ui-react';

class BookDetail extends React {
    constructor(props) {
        super(props);
        this.state = {
            book : props.book
        };
    }

    componentWillMount = () => {
        const isbn = this.props.history.location.search;
        const url = 'http://localhost:8080/b/search?s=' + isbn + '&catagory=book';
        fetch (url, {method: 'GET'})
            .then((response) => {
                if (response.status !== 200) {
                    console.log(response.statusText);
                    return;
                }
                return response.json();
            })
            .catch((err) => {
                console.log(err);
                return;
            })
            .then((res) => {
                console.log(res);
                this.setState({book : res});
            })
    }

    render() {
        return (
            <div>
                <Grid columns={2}>
                    <Grid.Row>
                        <Image src={this.props.book.img} size='large'/>
                    </Grid.Row>
                    <Grid.Row>
                        <Header as='h2'>{this.props.book.name}</Header>
                        <Header icon='user' as='h4'>{this.props.book.author}</Header>
                        <div>
                            <p>{this.props.book.Date}</p>
                            <p>Language: {this.props.book.lang}</p>
                            <p>Price: {this.props.book.price}</p>
                            <p>Stock: {this.props.book.stock}</p>
                        </div>
                        <div>
                            <Button.Group>
                                <Button color='red'>Add to cart</Button>
                                <Button color='green'>Checkout</Button>
                            </Button.Group>
                        </div>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default BookDetail;