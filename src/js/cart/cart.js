'use strict';

import React, {Component} from 'react';
import { Divider, Grid } from 'semantic-ui-react';
import HeaderBar from '../header';
import BookItem from '../bookItem';

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
]

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            res : result
        }
    }

    increase=(e, value) => {
        // result[e].amount += 1;
        // this.setState({
        //     res : result
        // });
        value.amount += 1;
        this.setState({res : result});
    }

    decrease=(e, value) => {
        // result[e].amount -= 1;
        // if (result[e].amount <= 0) {
        //     result.splice(e, 1);
        // }
        // this.setState({
        //     res : result
        // });
        value.amount -= 1;
        if (value.amount <= 0) {
            let idx = result.indexOf(value);
            result.splice(idx, 1);
        }
        this.setState({
            res : result
        });
    }

    render() {
        return (
            <div>
                <Divider/>
                <Grid className='searchResult'>
                    {
                        this.state.res.map(function(book, idx) {
                            return (
                                <BookItem book={book} increase={this.increase} decrease={this.decrease} rowid={idx} key={idx}/>
                            )
                        }, this)
                    }
                </Grid>
            </div>
        )
    }
}

export default Cart;
