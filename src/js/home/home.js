import React from 'react';
import { NavLink } from 'react-router-dom';
import {Grid, Button, Card, Image, Icon} from 'semantic-ui-react';

import Le_Petit_Prince from '../../img/Le_Petit_Prince.jpg';
import Bible from '../../img/Bible.jpg';
import Don_Quijote from '../../img/Don_Quijote_de_la_Mancha.jpg';
import Harry_Potter from '../../img/Harry_Potter.jpeg';
import Journey_To_The_West from '../../img/Journey_To_The_West.jpg';
import Stray_Birds from '../../img/Stray_Birds.jpg';
import The_Dream_of_the_Red_Chamber from '../../img/The_Dream_of_the_Red_Chamber.jpg';
import The_Old_Man_And_The_Sea from '../../img/The_Old_Man_And_The_Sea.jpg';
import One_Hunderd_Years_of_Solitude from '../../img/One_Hundred_Years_of_Solitude.jpg';

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
    

    render() {
        return (
            <Card.Group itemsPerRow={5}>
                {books.map(book => (
                    <Card>
                        <Image src={book.img} rounded />
                        <Card.Content>
                            <Card.Header>
                                {book.name}
                            </Card.Header>
                            <Card.Meta>
                                {book.Date}
                            </Card.Meta>
                            <Card.Description>
                                <Icon name='user' />{' '}{book.Author}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                                <Button basic color='green' 
                                    icon={<Icon name="add to cart" size='large' color='olive'/> }>
                                    Add to Cart
                                </Button>
                                <Button basic color='red' 
                                    icon={<Icon name='credit card' size='large' color='orange'/>}>
                                    Just Take it
                                </Button>
                            </div>
                        </Card.Content>
                    </Card>
                ))}
            </Card.Group>
        );
    }
}

export default Home;