import React, {Component} from 'react';
import { Button, Form, Grid, Segment, Header, Icon, Input, Message} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import '../../css/login.css';

// import Background from '../../img/Books-3.jpg';
class Login extends Component {
  render() {
    return (
      <div id='login_form' className='login'>
          {/*<style>
              {`
              body > div,
              body > div > div,
              body > div > div > div#login_page {height: 100%;}
          `}
          </style>*/}
        <Grid textAlign="center" verticalAlign='middle' style={{ height: '100%' }}>
          <Grid.Column style={{maxWidth: 500}}>
            <Header as="h2" color='teal' textAlign='center'>
                <Icon name='user' size='large' color='teal'/>{' '}Login
            </Header>
        <Form size='large'>
          <Segment piled>
          <Form.Field>
            <Input icon='user' iconPosition='left' fluid placeholder="User ID"/>
          </Form.Field>
          <Form.Field>
            <Input icon='lock' iconPosition='left' type='password' fluid placeholder='Password'/>
          </Form.Field>
          <Button color='teal' fluid size='large'>Sign in</Button>
          </Segment>
        </Form>
            <Message>
                New to us? <Link to='/signup'>Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default Login;