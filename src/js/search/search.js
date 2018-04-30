import React from 'react';
import {Icon, Card, Button, Grid, Label, Segment, Input, Image, Statistic} from 'semantic-ui-react';

import HeaderBar from '../header';
import Footer from '../footer';
import BookCard from '../bookCard';

import '../../css/home.css';

import The_Old_Man_And_The_Sea from '../../img/The_Old_Man_And_The_Sea.jpg';
import One_Hundred_Years_of_Solitude from '../../img/One_Hundred_Years_of_Solitude.jpg';
import Le_Petit_Prince from '../../img/Le_Petit_Prince.jpg';
import Bible from '../../img/Bible.jpg';
import Don_Quijote from '../../img/Don_Quijote_de_la_Mancha.jpg';
import Harry_Potter from '../../img/Harry_Potter.jpeg';
import Journey_To_The_West from '../../img/Journey_To_The_West.jpg';
import Stray_Birds from '../../img/Stray_Birds.jpg';
import The_Dream_of_the_Red_Chamber from '../../img/The_Dream_of_the_Red_Chamber.jpg';

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
        img: One_Hundred_Years_of_Solitude,
        Date: 1967,
        language: 'English',
        price: 10.3,
        amount: 4
    }
];

var books = [
    {name: 'Le Petit Prince',
        Author: 'Antoine de Saint-Exupéry',
        Date: 'April 1943',
        img: Le_Petit_Prince
    },
    {
        name: 'Bible',
        Author: 'Moses, Joshua, Samuel, Nathan, Gad, ...',
        Date: '5th century BCE',
        img: Bible
    },
    {
        name: 'Don Quijote de la Mancha',
        Author: 'Miguel de Cervantes',
        Date: '1605, 1615',
        img: Don_Quijote
    },
    {
        name: 'Harry Potter',
        Author: 'J.K. Rowling',
        Date: '26 June 1997 – 21 July 2007',
        img: Harry_Potter
    },
    {
        name: '红楼梦',
        Author: '曹雪芹',
        Date: '1791',
        img: The_Dream_of_the_Red_Chamber
    },
    {
        name: 'Stray Birds',
        Author: 'Rabindranath Tagore',
        Date: '1916',
        img: Stray_Birds
    },
    {
        name: '西游记',
        Author: '吴承恩',
        Date: '1600s',
        img: Journey_To_The_West
    }
];
class Search extends React.Component {
    // searchRes = result;

    constructor(props) {
        super(props);
        this.state = {
            res : result
        }
    }

    increase=(e) => {
        result[e].amount += 1;
        this.setState({
            res : result
        });

    }

    decrease=(e) => {
        result[e].amount -= 1;
        if (result[e].amount <= 0) {
            result.splice(e, 1);
        }
        this.setState({
            res : result
        });
    }

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
                <Card.Group itemsPerRow={6}>
                    {
                        books.map(function(book, idx) {
                            return (
                                <BookCard book={book} key={idx}/>
                            )
                        })
                    }
                </Card.Group>
                <Footer/>
            </div>
        );
    }
}

export default Search;
{/*<Grid className='searchResult'>
                {
                    this.state.res.map(function(book, idx) {
                        return (
                            <Grid.Row key={idx} >
                                <Grid.Column width={2}><Image src={book.img} size='small' rounded/></Grid.Column>
                                <Grid.Column width={5} verticalAlign='middle'>
                                    <Card header={book.name} meta={book.Author} extra={book.Date}/>
                                </Grid.Column>
                                <Grid.Column width={1}>{book.language}</Grid.Column>
                                <Grid.Column width={3}>
                                    <Statistic size='small'>
                                        <Statistic.Value>
                                            <Icon name='dollar'/>{book.price}
                                        </Statistic.Value>
                                    </Statistic>
                                </Grid.Column>
                                <Grid.Column width={5}>
                                    <Input type='number' value={book.amount} compact>
                                        <Button icon='plus' size='small' onClick={() => {this.increase(idx)}}/>
                                        <input />
                                        <Button icon='minus' size='small' onClick={() => {this.decrease(idx)}}/>
                                    </Input>
                                </Grid.Column>
                            </Grid.Row>
                        )
                    }, this)
            </Grid>*/}
