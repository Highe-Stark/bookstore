import React, {Component} from 'react';
import {Input, Icon, Button, Form} from 'semantic-ui-react';

import '../../css/login.css';

import Background from '../../img/Books-3.jpg';
class Login extends Component {
  render() {
    return (
      <div id='login_page'>
        <Form>
          <Form.Field>
            <label>Username: </label>
            <input placeholder='User name' />
          </Form.Field>
          <Form.Field>
            <label>Password: </label>
            <input type='password' />
          </Form.Field>
          <Button>Sign in</Button>
        </Form>
      </div>
    )
  }
}

export default Login;