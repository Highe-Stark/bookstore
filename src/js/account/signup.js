import React, {Component} from 'react';
import { Grid, Form, Button, Header, Segment } from 'semantic-ui-react';

import '../../css/login.css';

class Signup extends Component {
  render() {
    return (
      <div id='signup_form' className="login">
          {/*<style>
          {`
              body > div,
              body > div > div,
              body > div > div > div.signup-form {height: 100%;}
          `}
        </style>*/}
        <Grid textAlign="center" verticalAlign='middle' style={{ height: '100%' }}>
          <Grid.Column style={{ maxWidth: 500 }}>
            <Header as='h2' color='teal' textAlign="center">Sign Up</Header>
            <Form size='large'>
              <Segment piled>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='User ID' />
                <Form.Input fluid icon='lock' iconPosition='left' type='password' placeholder='Password' />
                <Form.Input fluid icon='lock' iconPosition='left' type='password' placeholder='Reenter your password'/>
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