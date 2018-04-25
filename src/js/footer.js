import _ from 'lodash';
import React, {Component} from 'react';
import {Grid, Flag, Icon, Dropdown, Select } from 'semantic-ui-react';

const lang = [
  {key: 'us', value: 'us', flag: 'us', text: "United States"},
  {key: 'gb', value: 'gb', flag: 'gb', text: "United Kindom"},
  {key: 'cn', value: 'cn', flag: 'cn', text: 'China'}
]

class Footer extends Component {
  render() {
    return (
      <Grid columns={6}>
        <Grid.Row>
          <Grid.Column>
            <Select icon='globe' iconPosition='left' options={lang} placeholder="Select language" />
          </Grid.Column>
          <Grid.Column>
            <Icon name='github' size='small' color='purple' />
            <a href='https://github.com/Highe-Stark/bookstore'>github</a>
          </Grid.Column>
          <Grid.Column>
            <Icon name='facebook f' size='small' color='blue' />
              <a href='https://www.facebook.com' >facebook</a> 
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Footer;