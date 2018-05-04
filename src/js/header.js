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
}

class LoggedMenu extends React.Component {
  render() {
    return(
        <Dropdown.Menu>
          <Dropdown.Header icon='user' content={this.props.user}/>
          <Dropdown.Item text='Account Center'/>
          <Dropdown.Item icon='shopping cart' text='Cart'/>
          <Dropdown.Item icon='power off' text='Log out'/>
        </Dropdown.Menu>
    )
  }
}

class HeaderBar extends React.Component {
  path = {
    pathname : '/search',
      search : ''
  }

  catagory = 'name'
  constructor(props) {
    super(props);
    // console.log(props);
  }

    getUser() {
        var cookies = decodeURIComponent(document.cookie);
        var ca = cookies.split(';');
        for (let i = 0; i !== ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf("user=") === 0) {
                return c.substring("user=".length, c.length)
            }
        }
        return null;
    }

  _toggleSearch=() => {
      var searchContent = document.getElementById("search").value;
      console.log(this.props);
      this.path.search='?s=' + searchContent + '&catagory=' + this.catagory;
      this.props.history.push(this.path);
  }
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
                // console.log(text.value);
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
                  {this.getUser() == null ? notLoggedMenu() : <LoggedMenu user={this.getUser()}/>}
                  {/*<Dropdown.Menu>
                  <Dropdown.Item >
                    <NavLink to='/login'>
                      Sign in
                      </NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink to='/signup'>
                      Sign up
                      </NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink to='/cart'>
                      <Icon name='shopping cart' />{' '}shopping cart
                    </NavLink>
                  </Dropdown.Item>
                </Dropdown.Menu>*/}
              </Dropdown>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default HeaderBar;