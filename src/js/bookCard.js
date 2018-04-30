import React from 'react';
import {Card, Icon, Button, Image} from 'semantic-ui-react';

class BookCard extends React.Component {
    constructor(props) {
        super(props);
    }
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
                        <Button basic color="pink">
                            <Icon name='empty heart' size='small' text='Like' />
                        </Button>
                        <Button basic color='green' >
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