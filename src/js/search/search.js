'use strict';

import React from 'react';
import {Icon, Card, Grid, Label, Button} from 'semantic-ui-react';

import BookCard from '../bookCard';

import '../../css/home.css';

import The_Old_Man_And_The_Sea from '../../img/The_Old_Man_And_The_Sea.jpg';
import One_Hundred_Years_of_Solitude from '../../img/One_Hundred_Years_of_Solitude.jpg';

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

/*var books = [
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
];*/
class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            res : result,
            validQuery: true,
        }
    }

    componentWillMount() {
        const query = this.props.history.location.search;
        let pos = query.indexOf("=");
        if (pos === query.length - 1) {
            this.setState({
                validQuery : false
            });
            return;
        }
        const url = 'http://localhost:8080/b/search' + this.props.history.location.search;
        fetch ( url, {
            method : 'GET',
            credentials: "include"
        }).then (response => {
            if (response.status !== 200) {
                throw Error("Search error");
            }
            return response.json();
        })
            .then((data) => {
                console.log(data);
                let res = [];
                for (let i = 0; i !== data.length; i++) {
                    console.log(data[i]);
                    let book = {
                        isbn: data[i].isbn,
                        name : data[i].name,
                        Author : data[i].author,
                        img : 'http://localhost:8080/b/get_img' + data[i].img,
                        Date : data[i].date,
                        Language : data[i].lang,
                        price : data[i].price,
                        amount : data[i].stock
                    };
                    res.push(book);
                }
                this.setState({
                    res : res
                })
            })
            .catch((err) => {
                alert(err);
            })
    }

    render () {
        return (
            <div>
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
                <div>
                    <Button.Group>
                        <Button icon disabled>
                            <Icon name='sort'/>
                        </Button>
                        <Button icon>
                            {'Book Name'}
                            <Icon name='sort alphabet ascending'/>
                        </Button>
                        <Button icon>
                            {'Price'}
                            <Icon name='sort numeric ascending'/>
                        </Button>
                    </Button.Group>
                </div>
                <Card.Group itemsPerRow={6}>
                    {
                        this.state.res.map(function(book, idx) {
                            return (
                                <BookCard book={book} key={idx}/>
                            )
                        })
                    }
                </Card.Group>
            </div>
        );
    }
}

export default Search;
