'use strict';
import React, {Component} from 'react';
import { Button, Form, Grid, Segment, Header, Icon, Input, Message, Checkbox} from 'semantic-ui-react';
import {Link, withRouter} from 'react-router-dom';
import '../../css/login.css';

class Login extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            name: '',
            password: '',
            logged: false,
            admin : false
        }
    }

    /*
     * Post user id and password to backend
     */
    _login=(username, password) => {
        // const userName = document.getElementById("userName").value;
        console.log("user Name: " + username);    // <<<<<<<<<<<<<<<<<< For DEBUG
        // const pwd = document.getElementById("pwd").value;
        console.log("Password: " + password);          // <<<<<<<<<<<<<<<<<< For DEBUG
        let body = "userName=" + username + "&pwd=" + password;
        console.log(body);                        // <<<<<<<<<<<<<<<<<< For DEBUG
        // let url = "http://localhost:8080/login?userId=" + userid.value + "&pwd=" + pwd.value;
        let url = 'http://localhost:8080/u/login?admin=0&' + body;
        const that = this;

        fetch (url, {
            method: 'GET',
            credentials : "include"
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
    };

    admin_login = (username, password) => {
        console.log("**** Administrator login *****\nAdmin name: " + username + "\nPassword: " + password);
        const url = 'http://localhost:8080/u/login?admin=1&userName=' + username + '&pwd=' + password;
        fetch (url, {
            method: 'GET',
            credentials: "include"
        }).then((response) => {
            let status = response.status;
            if (status != 200) {
                console.log('Login failed! ' + response.statusText);
                document.getElementById("userName").value = "";
                document.getElementById("pwd").value = "";
            }
            this.setState({
                logged : true
            });
            this.props.history.push('/stock');
        }).catch((err) => {
            alert('Fetch Error: ' + err);
            this.props.history.push('/signup');
        })
    };

    toggle = (e, {name, value}) =>
    {
        console.log(value);
        this.setState({[name]: !value})
    };

    handleChange = (e, {name, value}) => {
        this.setState({
            [name]: value
        });
        console.log(this.state);
    }

  render() {
    const {name, password, logged, admin} = this.state;

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
            <Input id='userName' name='name' value={name} onChange={this.handleChange}
                   icon='user' iconPosition='left' fluid placeholder="User Name"/>
          </Form.Field>
          <Form.Field>
            <Input id='pwd' name='password' value={password} onChange={this.handleChange}
                   icon='lock' iconPosition='left' type='password' fluid placeholder='Password'/>
          </Form.Field>
              <Form.Field>
                  <Checkbox toggle name='admin' value={admin} checked={admin} onChange={this.toggle}/>Admin
              </Form.Field>
          <Button color='teal' fluid size='large' onClick={(e, value) =>
            {admin ? this.admin_login(name, password) : this._login(name, password)}}>Sign in</Button>
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