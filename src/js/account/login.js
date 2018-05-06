import React, {Component} from 'react';
import { Button, Form, Grid, Segment, Header, Icon, Input, Message} from 'semantic-ui-react';
import {Link, withRouter} from 'react-router-dom';
import '../../css/login.css';

class Login extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            logged: false
        }
    }

    /*
     * Post user id and password to backend
     */
    _login=() => {
        const userName = document.getElementById("userName").value;
        console.log("user Name: " + userName);    // <<<<<<<<<<<<<<<<<< For DEBUG
        const pwd = document.getElementById("pwd").value;
        console.log("Password: " + pwd);          // <<<<<<<<<<<<<<<<<< For DEBUG
        const body = "userName=" + userName + "&pwd=" + pwd;
        console.log(body);                        // <<<<<<<<<<<<<<<<<< For DEBUG
        // let url = "http://localhost:8080/login?userId=" + userid.value + "&pwd=" + pwd.value;
        let url = 'http://localhost:8080/login';
        const that = this;

        fetch (url, {
            method: 'POST',
            body: body,
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            origin: "http://localhost:3000"
        }).then(
            (response) => {
                if (response.status !== 200) {
                    console.log("Login failed. Status: " + response.status);
                    that.setState({
                        logged: false
                    });
                    document.getElementById("userName").value = "";
                    document.getElementById("pwd").value = "";
                    return;
                }
                // response status = 200, login success
                that.setState({
                    logged: true
                });
                that.props.history.push('/home');
            }
        ).catch((err)=> {
            console.log("Fetch Error: " + err);
            this.props.history.push('/signup');
      });
    }

  render() {
    return (
      <div id='login_form' className='login'>
        <Grid textAlign="center" verticalAlign='middle' style={{ height: '100%' }}>
          <Grid.Column style={{maxWidth: 500}}>
            <Header as="h2" color='teal' textAlign='center'>
                <Icon name='user' size='large' color='teal'/>{' '}Login
            </Header>
        <Form size='large'>
          <Segment piled>
          <Form.Field>
            <Input id='userName' icon='user' iconPosition='left' fluid placeholder="User Name"/>
          </Form.Field>
          <Form.Field>
            <Input id='pwd' icon='lock' iconPosition='left' type='password' fluid placeholder='Password'/>
          </Form.Field>
          <Button color='teal' fluid size='large' onClick={this._login}>Sign in</Button>
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

export default withRouter(Login);