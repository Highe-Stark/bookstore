'use strict';
import React from 'react';
import { Icon, Image, Input, Header, Dropdown, Grid, Select, Button } from 'semantic-ui-react';
import {NavLink } from 'react-router-dom';

import Book from '../img/Books-2.jpg';

import '../css/header.css';

const catagory = [
  {key: 'all', text: "All", value: 'all'},
  {key: 'author', text: 'Author', value: 'author'},
  {key: 'name', text: 'Book name', value: 'name'},
  {key: 'publisher', text: "Publisher", value: 'publish'}
];

const notLoggedMenu = () => {
  return(
      <Dropdown.Menu>
          <Dropdown.Item>
              <NavLink to='/login'>
                  Login
              </NavLink>
          </Dropdown.Item>
        <Dropdown.Item>
          <NavLink to='/signup'>
              Sign up
          </NavLink>
        </Dropdown.Item>
      </Dropdown.Menu>
  );
};

const LoggedMenu = (user, act) => {
    return (
        <Dropdown.Menu>
            <Dropdown.Header icon='user' content={user}/>
            <Dropdown.Item>
                <NavLink to='/home/account'>Account Center</NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
                <NavLink to='/home/cart'><Icon name='shopping cart'/>Cart</NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
                <NavLink to='/stock'><Icon name='cubes'/>Stock</NavLink>
            </Dropdown.Item>
            <Dropdown.Item icon='power' text='Log out' onClick={act}/>
        </Dropdown.Menu>
    )
};

class HeaderBar extends React.Component {
  path = {
    pathname : '/home/s',
    search : ''
  };

  catagory = 'name';
  constructor(props) {
    super(props);
    this.state = {
        user : null,
        admin : false
    }
  }

  componentDidMount() {
      this.getUser();
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
              let res =  c.substring(user.length + 1, c.length);
              this.setState({
                  user : res,
              })
          }
          if (c.indexOf('admin') === 0) {
              this.setState( {
                  admin : true
              })
          }
      }
      return null;
  }

  _logout = () => {
      const url = 'http://localhost:8080/logout?userName=' + this.getUser();
      fetch(url, {
          method : 'GET',
          credentials : 'include'
      }).then(response => {
          if (response.status !== 200) {
              console.log("Error while logout.");
          }
          this.props.history.push('/home');
          // clean up after logout
      })
  };

  _toggleSearch=() => {
      const searchContent = document.getElementById("search").value;
      console.log(this.props);
      this.path.search='?q=%' + searchContent + '%&category=' + this.catagory;
      this.props.history.push(this.path);
  };

  render() {
    return (
      <div id="header_bar">
        <Grid divided padded>
          <Grid.Row>
              {/*
                * Icon Column
                * Click jumping to path /
                */}
            <Grid.Column width={3} textAlign='left'>
              <NavLink to="/home">
              <Header as="h2" color='teal'>
                <Image circular src={Book} height='20rem' verticalAlign='middle' />
                {' '}书轩
                <Header.Subheader color='teal'>
                  <p>Enjoy Book, Enjoy Life.</p>
                </Header.Subheader>
              </Header>
              </NavLink>
            </Grid.Column>
              {/*
                * Search Column
                */}
            <Grid.Column width={11} verticalAlign='middle' stretched>
              <Input placeholder="Search..." fluid focus iconPosition='left'>
              <input id='search'/>
                <Icon name='search'/>
              <Select id = 'catagory' name="catagory" options={catagory} defaultValue='name' onChange={(value, text ) =>{
                  this.catagory = text.value;
              }}/>
              <Button compact onClick={this._toggleSearch}>
                  {/*<!--NavLink to='/search'-->*/}
                <Icon name='search' circular link />
                  {/*<!--/NavLink-->*/}
                </Button>
              </Input>
            </Grid.Column>
              {/*
                * Account column
                */}
            <Grid.Column width={2} textAlign='center' floated='right' verticalAlign='middle'>
              <Dropdown icon={<Icon name='user' size='large' color='teal'/>} floating labeled button>
                  {this.getUser() == null ? notLoggedMenu() : LoggedMenu(this.getUser(), this._logout)}
              </Dropdown>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default HeaderBar;