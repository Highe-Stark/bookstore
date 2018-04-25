import React from 'react';
import {Segment, Icon, Image, Input, Header, Dropdown, Grid, Select, Button } from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';

import Book from '../img/Books-2.jpg';

const catagory = [
  {key: 'all', text: "All", value: 'all'},
  {key: 'author', text: 'Author', value: 'author'},
  {key: 'name', text: 'Book name', value: 'name'},
  {key: 'publisher', text: "Publisher", value: 'publish'}
];

class HeaderBar extends React.Component {
  render() {
    return (
      <div>
        <Grid divided>
          <Grid.Row>
            <Grid.Column width={3} textAlign='left'>
              <Header as="h2">
                <Image circular src={Book} height='20rem' verticalAlign='middle' />
                {' '}书轩
            <Header.Subheader>
                  <p>Enjoy Book, Enjoy Life.</p>
                </Header.Subheader>
              </Header>
            </Grid.Column>
            <Grid.Column width={5}>
              <Input placeholder="Search..." fluid focus>
              <input/>
              <Select compact options={catagory} defaultValue='name' />
              <Button>
                <Icon name='search' inverted circular link />
                </Button>
              </Input>
            </Grid.Column>
            <Grid.Column width={2} textAlign='center' floated='right'>
              <Dropdown icon={<Icon name='user' size='large'/>} floating labeled button>
                <Dropdown.Menu>
                  <Dropdown.Item text="Sign in" />
                  <Dropdown.Item text="Sign up" />
                  <Dropdown.Item text="Cart" icon='shopping cart'/>
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