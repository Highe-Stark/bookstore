import React from 'react';
import {Segment, Icon, Image, Input, Header, Dropdown, Grid } from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';

import Book from '../img/Books-2.jpg';

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
              <Input icon={<Icon name='search' inverted circular link/>}
                placeholder="Search..." fluid focus
              />
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