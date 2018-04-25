import React, {Component} from 'react';
import {Input, Grid, Checkbox, Form, Icon, Button, Header, Segment } from 'semantic-ui-react';

class Signup extends Component {
  render() {
    return (
      <div>
        {/*<style>
          {
            body > div, 
            body > div > div, 
            body > div > div > div.signup-from { height: 100%; }
          }
        </style>*/}
        <Grid textAlign="center" verticalAlign="middle" style={{ height: '100%' }}>
          <Grid.Column style={{ maxWidth: 500 }}>
            <Header as='h2' color='teal' textAlign="center">Sign Up</Header>
            <Form size='large'>
              <Segment piled>
                <Form.input fluid icon='user' iconPosition='left' placeholder='User ID' />
                <Form.input fluid icon='lock' iconPosition='left' type='password' placeholder='Password' />

                <Button color='teal' fluid size='large' >Sign up</Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default Signup;