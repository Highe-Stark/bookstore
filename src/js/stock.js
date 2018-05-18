'use strict';

import React from 'react';
import {Input, Image, Button, Header, Dropdown, Form, Table, Search, Icon, Grid, Label} from 'semantic-ui-react';
import {NavLink, Route} from 'react-router-dom';
import Footer from './footer';
import BookSvg from '../img/book_1.svg';
import Le_Petit_Prince from '../img/Le_Petit_Prince.jpg';
import Bible from '../img/Bible.jpg';
import Don_Quijote from '../img/Don_Quijote_de_la_Mancha.jpg';
import '../css/stock.css';

class Bk extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            edit : false
        }
    }

    _toggleEdit = () => {
        this.setState({
            edit : true
        })
    };

    _toggleCancel = () => {
        this.setState({
            edit : false
        })
    };

    _toggleDel(e, value) {
        let isbn = value.isbn;
        const url = 'http://localhost:8080/delete?isbn=' + isbn;
        fetch (url, {
            method : 'GET'
        }).then(response => {
            if (response.status !== 200) {
                console.log("Delete failed.");
            }
            else {
                console.log("Delete success");
            }
        })
    }

    render() {
        return (
            this.state.edit ?
                <Table.Row>
                    <Table.Cell width={2}>
                        <Image src={this.props.book.img} size='small' rounded/>
                    </Table.Cell>
                    <Table.Cell width={2}>
                        <Input type='text' fluid defaultValue={this.props.book.name}/>
                    </Table.Cell>
                    <Table.Cell width={2}>
                        <Input type='text' fluid defaultValue={this.props.book.Author}/>
                    </Table.Cell>
                    <Table.Cell width={1}>
                        <Input type='text' fluid defaultValue={this.props.book.lang}/>
                    </Table.Cell>
                    <Table.Cell width={1}>
                        <Input type='text' fluid defaultValue={this.props.book.Date}/>
                    </Table.Cell>
                    <Table.Cell width={2}>
                        <Input type='text' fluid defaultValue={this.props.book.isbn}/>
                    </Table.Cell>
                    <Table.Cell width={2}>
                        <Input type='number' fluid defaultValue={this.props.book.price} />
                    </Table.Cell>
                    <Table.Cell width={2}>
                        <Input type='number' fluid defaultValue={this.props.book.amount} />
                    </Table.Cell>
                    <Table.Cell width={2}>
                        <Button icon='check circle' circular color='teal'/>
                        <Button icon='remove circle' circular color='red' onClick={this._toggleCancel}/>
                        <Button icon='undo' circular color='purple'/>
                    </Table.Cell>
                </Table.Row>
                :
                <Table.Row>
                    <Table.Cell width={2}>
                        <Image src={this.props.book.img} size='small' rounded/>
                    </Table.Cell>
                    <Table.Cell width={2}>
                        {/* <Header as='h3'>{this.props.book.name}</Header>*/}
                        {this.props.book.name}
                    </Table.Cell>
                    <Table.Cell width={1}>
                        {this.props.book.Author}
                    </Table.Cell>
                    <Table.Cell width={2}>
                        {this.props.book.lang}
                    </Table.Cell>
                    <Table.Cell width={2}>
                        {this.props.book.Date}
                    </Table.Cell>
                    <Table.Cell width={2}>{this.props.book.isbn}</Table.Cell>
                    <Table.Cell width={2}>
                        {this.props.book.price}
                    </Table.Cell>
                    <Table.Cell width={1}>
                        {this.props.book.amount}
                    </Table.Cell>
                    <Table.Cell width={2}>
                        <Button icon='edit' circular color='teal' onClick={this._toggleEdit}/>
                        <Button icon='trash outline' circular color='red'/>
                    </Table.Cell>
                </Table.Row>
        )
    }
}

const tHeader = ['Cover', 'Name', 'Author', 'Language', 'Publish Date', 'ISBN', 'Price', 'Stock', 'Action'];

var stockList = [
    {
        name: 'Le Petit Prince',
        Author: 'Antoine de Saint-Exupéry',
        Date: 'April 1943',
        img: Le_Petit_Prince,
        price : 20,
        lang : 'French',
        isbn : '978-4920-233',
        amount : 100
    },
    {
        name: 'Bible',
        Author: 'Moses, Joshua, Samuel, Nathan, Gad, ...',
        Date: '5th century BCE',
        img: Bible,
        price : 50,
        lang : 'English',
        isbn : '978-1-394-49',
        amount : 200
    },
    {
        name: 'Don Quijote de la Mancha',
        Author: 'Miguel de Cervantes',
        Date: '1605, 1615',
        img: Don_Quijote,
        price : 27.98,
        lang : 'Spanish',
        isbn : '987-3-183803',
        amount : 98
    },
];

class BookList extends React.Component{
    constructor(props) {
        super(props);
        // this.setState({ book : book })
        this.state = {
            isLoading : false,
            tbHeader : tHeader,
            books : stockList
        };
    }

    handleSearchChange = () => {
        this.setState({isLoading : true});

        setTimeout(() => {
            this.setState({
                isLoading : false,
            })
        }, 300)
    };

    render() {
        return (
            <div>
                <div>
                    {
                        // Temporal link chart to main page
                    }
                    <NavLink to='/stock/add'><Icon name='add circle' size='big' color='orange'/></NavLink>
                    <NavLink to='stock/main'><Icon name='bar chart' size='big' color='green' /></NavLink>
                    {/*<Search loading={this.state.isLoading}  onSearchChange={this.handleSearchChange} {...this.props}/>*/}
                </div>
                <div>
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                {this.state.tbHeader.map(function(attr, idx) {
                                    return (
                                        <Table.HeaderCell key={idx}>{attr}</Table.HeaderCell>
                                    );
                                })
                                }
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {this.state.books.map((book, idx) => {
                                return (
                                    <Bk book={book} key={idx}/>
                                )
                            })}
                        </Table.Body>
                    </Table>
                </div>
            </div>
        )
    }
}

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            author : '',
            date : '',
            isbn : '',
            lang  : '',
            price : 0,
            stock : 0,
            img : BookSvg,
        }
    }

    handleChange = (e, {name, value}) => this.setState({[name] : value});

    submitBook = (e, value) => {
        console.log("Submit Book");
        console.log(value);
        console.log(this.state);
    };

    submitProfile = () =>{
        let newProfile = document.getElementById('profileUpload').files[0];
        console.log(newProfile);
        let formData = new FormData();
        formData.append('new_profile', newProfile);
        let url = 'http://localhost:8080/api/upload';
        fetch (url, {
            method : 'POST',
            body : formData
        }).then(response => {
            if (response.status !== 200) {
                alert('Upload profile failed.');
                return null;
            }
            return response.json();
        }).then(data => {
            if (data !== null) {
                this.setState({
                    img : data.img
                })
            }
        })
    };

    render () {
        const { name, author, date, isbn, lang, price, stock, img } = this.state;
        return (
            <Grid>
                <Grid.Column width={3}>
                    <Image src={img} bordered/>
                    <Form id='profile-form' method='POST' enctype='multipart/form-data' onSubmit={this.submitProfile}>
                        <Input type='file' id='profileUpload' name='profileUpload' />
                        <Button type='submit' value='Upload' content='Update profile'/>
                    </Form>
                </Grid.Column>
                <Grid.Column width={7}>
                    <Form.Group>
                        <Form.Field>
                            <span><Header as='h3'>Book Name</Header></span>
                            <Input type='text' name='name' value={name} placeholder='Book name' onChange={this.handleChange} fluid/>
                        </Form.Field>
                        <Form.Field>
                            <span><Header as='h3'>Author</Header></span>
                            <Input type='text' name='author' value={author} placeholder='Book Author' onChange={this.handleChange} fluid/>
                        </Form.Field>
                        <Form.Field>
                            <span><Header as='h3'>Publish Date</Header></span>
                            <Input type='text' name='date' value={date} placeholder='publish date' onChange={this.handleChange} fluid/>
                        </Form.Field>
                        <Form.Field>
                            <span><Header as='h3'>ISBN</Header></span>
                            <Input type='text' name='isbn' value={isbn} placeholder='ISBN' onChange={this.handleChange} fluid/>
                        </Form.Field>
                        <Form.Field>
                            <span><Header as='h3'>Language</Header></span>
                            <Input type='text' name='lang' value={lang} onChange={this.handleChange} fluid/>
                        </Form.Field>
                    </Form.Group>
                </Grid.Column>
                <Grid.Column witdth={6}>
                    <Form.Group>
                        <Form.Field>
                            <span><Header as='h3'>Price</Header></span>
                            <Input type='number' name='price' value={price} onChange={this.handleChange} fluid/>
                        </Form.Field>
                        <Form.Field>
                            <span><Header as='h3'>Stock</Header></span>
                            <Input type='number' name='stock' value={stock} onChange={this.handleChange} fluid/>
                        </Form.Field>
                    </Form.Group>
                    <div style={{marginTop : '1rem'}}>
                    <Button name='submit' className='btn-right btn-act'
                            value={{name, author, date, isbn, lang, price, stock, img}} onClick={this.submitBook}>
                        <Icon name='checkmark' color='green' size='large'/>{' '}Submit
                    </Button>
                    <NavLink to='/stock/main'>
                        <Button className='btn-wrong btn-act'><Icon name='remove' color='red' size='large'/>{' '}Cancel</Button>
                    </NavLink>
                    </div>
                </Grid.Column>
            </Grid>
        )
    }
}

class Stock extends React.Component {
    constructor(props) {
        super(props);
    }

    getUser() {
        const cookies = decodeURIComponent(document.cookie);
        let ca = cookies.split(';');
        const user = 'userName';
        for (let i = 0; i !== ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(user) === 0) {
                return c.substring(user.length + 1, c.length);
            }
        }
        return null;
    }

    _logout = () => {
        const url = 'http://localhost:8080/logout?userName' + this.getUser();
        fetch (url, {
            method : 'GET',
            credentials : 'include'
        }).then (response => {
            if (response.status !== 200) {
                console.log("Error while logout");
            }
            this.props.history.push('/home');
            // some clean up code
        })
    };

    render() {
        return (
            <div>
                <div className='stock header'>
                    <Grid>
                        <Grid.Row color='purple'>
                            <Grid.Column width={6} floated='left' textAlign='center' verticalAlign='middle'>
                                <Header>
                                    <Icon name='cubes' size='large' />{' '}Book Management Pane
                                </Header>
                            </Grid.Column>
                            <Grid.Column width={3} floated='right' textAlign='center' verticalAlign='middle'>
                                <Dropdown icon={<Icon name='user' className='stock icon' size='large'/>} floating labeled button className='icon'>
                                <Dropdown.Menu>
                                    <Dropdown.Header content='Administrator' icon={
                                        <Icon.Group size='big'>
                                            <Icon name='user'/>
                                            <Icon corner name='protect'/>
                                        </Icon.Group>
                                    }/>
                                    <Dropdown.Item icon='sign out' text='Log out' onClick={this._logout}/>
                                </Dropdown.Menu>
                                </Dropdown>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
                <br/>
                <div>
                    <Route path='/stock/main' component={BookList}/>
                    <Route path='/stock/add' component={Add}/>
                </div>
                <div style={{marginTop : '2rem'}}></div>
                <Footer/>
            </div>
        )
    }
}

export default Stock;
{/*
                        <Header as='h3'>Book Name{' '}</Header>
                        <Form.Input type='text' name='name' value={name} placeholder='Book Name' onChange={this.handleChange} />
                        <Header as='h3'>Author{' '}</Header>
                        <Form.Input type='text' name='author' value={author} placeholder='Book Author' onChange={this.handleChange}/>
                        <Header as='h4'>Publish Date{' '}</Header>
                        <Form.Input type='text' name='date' value={date} placeholder='2008-08-01' onChange={this.handleChange}/>
                        <Header as='h4'>ISBN{' '}</Header>
                        <Form.Input type='text' name='isbn' value={isbn} placeholder='***-*-***-*****-*' onChange={this.handleChange}/>
                        <Header as='h4'> Language{' '}</Header>
                        <Form.Input type='text' name='lang' value={lang} placeholder='language' onChange={this.handleChange}/>
                        <Header as='h3'> Price{' '}</Header>
                        <Form.Input type='number' name='price' value={price} onChange={this.handleChange}/>
                        <Header as='h3'> Stock{' '}</Header>
                        <Form.Input type='number' name='stock' value={stock} onChange={this.handleChange}/>
                        */}
