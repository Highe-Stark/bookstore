'use strict';

import React from 'react';
import {Card, Icon, Button, Image} from 'semantic-ui-react';

class BookCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            like : false
        }
    }
    toggleLike = () => {
        const isbn = this.props.book.isbn;
        fetch ('http://localhost:8080/u/like?isbn=' + isbn, {method : 'GET'})
            .then((response) => { console.log(
                'like ' + isbn
            );
            console.log(response);
            });
        this.setState({
            like : !this.state.like
        });
    };

    toggleCart =(e, value) => {
        const isbn = this.props.book.isbn;
        const url = 'http://localhost:8080/b/add_cart?isbn=' + isbn;
        fetch (url, {method: 'GET'})
            .then((response) => {
                if (response.status != 200) {
                    alert('Add to cart failed.');
                    return;
                }
                console.log('Add book { isbn : ' + isbn + ' } to cart');
            })
            .catch ((err) => {
                console.log("Error ! \n" + err);
            })
    };


    render() {
        return (
            <Card>
                <Image src={this.props.book.img} size='large' rounded />
                <Card.Content>
                    <Card.Header>
                        {this.props.book.name}
                    </Card.Header>
                    <Card.Meta>
                        {this.props.book.Date}
                    </Card.Meta>
                    <Card.Description>
                        <Icon name='user' />{' '}{this.props.book.Author}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui three buttons'>
                        <Button basic color="pink" onClick={this.toggleLike}>
                            <Icon name={this.state.like ? 'heart' : 'empty heart'} size='small' text='Like' />
                        </Button>
                        <Button basic color='green' onClick={this.toggleCart}>
                            <Icon name="add to cart" size='large' color='olive' text='Add to Cart'/>
                        </Button>
                        <Button basic color='red' >
                            <Icon name='shopping cart' size='large' color='orange' text='Just Take it' />
                        </Button>
                    </div>
                </Card.Content>
            </Card>
        )
    }
}

export default BookCard;