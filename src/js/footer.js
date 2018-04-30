// import _ from 'lodash';
import React, {Component} from 'react';
import {Grid, Icon, Label, Dropdown} from 'semantic-ui-react';

const lang = [
  {key: 'us', value: 'us', flag: 'us', text: "United States"},
  {key: 'gb', value: 'gb', flag: 'gb', text: "United Kindom"},
  {key: 'cn', value: 'cn', flag: 'cn', text: 'China'}
]

class Footer extends Component {
  render() {
    return (
      <Grid className='footer' columns={6} textAlign='center'>
        <Grid.Row>
          <Grid.Column>
              {/*<Select icon='globe' iconPosition='left' options={lang} scrolling placeholder="Select language" />*/}
              <Dropdown icon='world' className='icon' floating labeled options={lang} defaultValue={lang[0].value} search fluid/>
          </Grid.Column>
          <Grid.Column>
            <Label>
            <Icon name='github' size='small' color='purple' />
            <a href='https://github.com/Highe-Stark/bookstore'>github</a>
            </Label>
          </Grid.Column>
          <Grid.Column>
            <Label>
            <Icon name='facebook f' size='small' color='blue' />
              <a href='https://www.facebook.com' >facebook</a>
            </Label>
          </Grid.Column>
          <Grid.Column>
              <Label as='a'>
                <Icon name='youtube play' size='small' color='red' />{' '}Youtube
              </Label>
          </Grid.Column>
        </Grid.Row>
          <div style={{marginBottom: '2.5rem'}}></div>
      </Grid>
    )
  }
}

export default Footer;