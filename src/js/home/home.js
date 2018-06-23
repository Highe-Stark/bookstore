'use strict';

import React from 'react';
import {  Card } from 'semantic-ui-react';
import BookCard from '../bookCard';

import Le_Petit_Prince from '../../img/Le_Petit_Prince.jpg';
import Bible from '../../img/Bible.jpg';
import Don_Quijote from '../../img/Don_Quijote_de_la_Mancha.jpg';
import Harry_Potter from '../../img/Harry_Potter.jpeg';
import Journey_To_The_West from '../../img/Journey_To_The_West.jpg';
import Stray_Birds from '../../img/Stray_Birds.jpg';
import The_Dream_of_the_Red_Chamber from '../../img/The_Dream_of_the_Red_Chamber.jpg';

var books = [
    {
        name: 'Le Petit Prince',
        Author: 'Antoine de Saint-Exupéry',
        Date: 'April 1943',
        img: Le_Petit_Prince,
        isbn: '1000000000'
    },
    {
        name: 'Bible',
        Author: 'Moses, Joshua, Samuel, Nathan, Gad, ...',
        Date: '5th century BCE',
        img: Bible,
        isbn: '1000010000'
    },
    {
        name: 'Don Quijote de la Mancha',
        Author: 'Miguel de Cervantes',
        Date: '1605, 1615',
        img: Don_Quijote,
        isbn: '1000020002'
    },
    {
        name: 'Harry Potter',
        Author: 'J.K. Rowling',
        Date: '26 June 1997 – 21 July 2007',
        img: Harry_Potter,
        isbn: '10000200008'
    },
    {
        name: '红楼梦',
        Author: '曹雪芹',
        Date: '1791',
        img: The_Dream_of_the_Red_Chamber,
        isbn: '100003003490'
    },
    {
        name: 'Stray Birds',
        Author: 'Rabindranath Tagore',
        Date: '1916',
        img: Stray_Birds,
        isbn: '100004000390'
    },
    {
        name: '西游记',
        Author: '吴承恩',
        Date: '1600s',
        img: Journey_To_The_West,
        isbn: '10000500090'
    }
];

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: books
        }
    }

   componentWillMount() {
       var url = "http://localhost:8080/b/all";
       fetch (url, {
           method : 'GET',
       }).then(
           function (response) {
               console.log(response);
               return response.json();
           }
       ).catch(err => {
           console.log(err);
           return null;
       }).then ((data) => {
           if (data === null || data.content === null) return;
           const result = data.content;
           for (let i = 0; i < result.length; i++) {
               var newBook = {
                   name: result[i].name,
                   Author: result[i].author,
                   Date: result[i].date,
                   img: 'http://localhost:8080/' + result[i].img,
                   isbn: result[i].isbn
               };
               books.push(newBook);
           }
           this.setState({
               books : books
           })
       })
   }

    render() {
        return (
            <Card.Group itemsPerRow={6}>
                {this.state.books.map(function(book, idx) {
                    return <BookCard book={book} key={idx}/>
                })}
            </Card.Group>
        );
    }
}

export default Home;