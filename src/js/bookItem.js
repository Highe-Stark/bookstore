import React from 'react';
import {Grid, Card, Statistic, Icon, Input, Image, Button} from 'semantic-ui-react';

class BookItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid.Row divided>
                <Grid.Column width={2}><Image src={this.props.book.img} size='small' rounded/></Grid.Column>
                <Grid.Column width={5} verticalAlign='middle'>
                    <Card header={this.props.book.name} meta={this.props.book.Author} extra={this.props.book.Date}/>
                </Grid.Column>
                <Grid.Column width={1}>{this.props.book.language}</Grid.Column>
                <Grid.Column width={3}>
                    <Statistic size='small'>
                        <Statistic.Value>
                            <Icon name='dollar' />{this.props.book.price}
                        </Statistic.Value>
                    </Statistic>
                </Grid.Column>
                <Grid.Column width={5}>
                    <Input type="number" value={this.props.book.amount} compact>
                        <Button icon='plus' size='small' onClick={() => {this.props.increase(this.props.rowid)}}/>
                        <input/>
                        <Button icon='minus' size='small' onClick={() => {this.props.decrease(this.props.rowid)}}/>
                    </Input>
                </Grid.Column>
            </Grid.Row>
        );
    }
}

export default BookItem;