import React from 'react';
import {Icon, Card, Button, Grid, Label, Segment, Input, Image, Statistic} from 'semantic-ui-react';

import HeaderBar from '../header';
import Footer from '../footer';

import The_Old_Man_And_The_Sea from '../../img/The_Old_Man_And_The_Sea.jpg';
import One_Hunderd_Years_of_Solitude from '../../img/One_Hundred_Years_of_Solitude.jpg';

var result = [
    {
        name: "The Old Man And the Sea",
        Author: 'Ernest Hemingway',
        img: The_Old_Man_And_The_Sea,
        Date: 1952,
        language: 'English',
        price: 5,
        amount: 2
    },
    {
        name: 'One Hundred Years of Solitude',
        Author: 'Gabriel García Márquez',
        img: One_Hunderd_Years_of_Solitude,
        Date: 1967,
        language: 'English',
        price: 10.3,
        amount: 4
    }
]
class Search extends React.Component {

    render () {
        return (
            <div className='home'>
            <HeaderBar/>
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Label>
                            Tagore
                            <Icon name='delete'/>
                        </Label>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Segment.Group raised>
                    {result.map(book => (
                        <Segment.Group horizontal key={book.name} value={book.name}>
                            <Segment width={3}><Image src={book.img} size='small' rounded/></Segment>
                            <Segment width={5}>
                                <Card header={book.name} meta={book.Author} extra={book.Date}/>
                            </Segment>
                            <Segment width={2}>
                                {book.language}
                            </Segment>
                            <Segment width={3}>
                                <Statistic>
                                    <Statistic.Value>
                                        <Icon name='dollar'/>
                                        {book.price}
                                        </Statistic.Value>
                                </Statistic>
                            </Segment>
                            <Segment width={3}>
                                <Input type='number' value={book.amount} compact>
                                    {/*<Button icon='plus' size='small' onClick={() => {book.amount += 1; console.log(book.amount)}}/>*/}
                                    <Button icon='plus' size='small'/>
                                    <input/>
                                    {/*<Button icon='minus' size='small' onClick={() => {book.amount -= 1; console.log(book.amount)}}/>*/}
                                    <Button icon='minus' size='small'/>
                                </Input>
                            </Segment>
                        </Segment.Group>
                    ))}
            </Segment.Group>
            <Footer/>
        </div>
        );
    }
}

export default Search;