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

class HeaderBar extends React.Component {
  render() {
    return (
      <div id="header_bar">
        <Grid divided padded='horizontal'>
          <Grid.Row>
            <Grid.Column width={3} textAlign='left'>
              <NavLink to="/">
              <Header as="h2" color='teal'>
                <Image circular src={Book} height='20rem' verticalAlign='middle' />
                {' '}书轩
                <Header.Subheader color='teal'>
                  <p>Enjoy Book, Enjoy Life.</p>
                </Header.Subheader>
              </Header>
              </NavLink>
            </Grid.Column>
            <Grid.Column width={11} verticalAlign='middle' stretched>
              <Input placeholder="Search..." fluid focus iconPosition='left'>
              <input/>
                <Icon name='search'/>
              <Select options={catagory} defaultValue='name' />
              <Button compact>
                <NavLink to='/search'>
                <Icon name='search' circular link />
                </NavLink>
                </Button>
              </Input>
            </Grid.Column>
            <Grid.Column width={2} textAlign='center' floated='right' verticalAlign='middle'>
              <Dropdown icon={<Icon name='user' size='large' color='teal'/>} floating labeled button>
                <Dropdown.Menu>
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
                </Dropdown.Menu>
              </Dropdown>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default HeaderBar;