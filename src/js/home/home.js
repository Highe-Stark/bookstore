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

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: books
        }
    }

   componentWillMount() {
       var url = "http://localhost:8080/";
       fetch (url, {
           method : 'GET',
           origin : "http://localhost:8080"
       }).then(
           function (response) {
               console.log(response);
               // if (response == null) return null;
               return response.json();
           }
       ).catch(err => {
           console.log(err);
           return null;
       }).then ((data) => {
           if (data === null) return;
           for (let i = 0; i < data.length; i++) {
               var newBook = {
                   name: data[i].name,
                   Author: data[i].author,
                   Date: data[i].date,
                   img: 'http://localhost:8080/' + data[i].img
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