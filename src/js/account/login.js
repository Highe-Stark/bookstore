import React, {Component} from 'react';
import { Button, Form, Grid, Segment, Header, Icon, Input, Message} from 'semantic-ui-react';
import {Link, withRouter} from 'react-router-dom';
// import {History} from 'react-router-dom';
import '../../css/login.css';

// import Background from '../../img/Books-3.jpg';
class Login extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            logged: false
        }
    }


    _login=() => {
        //var formData = new FormData();
        var userid = document.getElementById("userId");
        console.log("user id" + userid.value);
        var pwd = document.getElementById("pwd");
        console.log("pwd" + pwd.value);
        // debug <<<<<<<<<<<<<<
        // console.log(JSON.stringify(formData));
        let url = "http://localhost:8080/login?userId=" + userid.value + "&pwd=" + pwd.value;
        var that = this;
        fetch (url, {
            method: 'POST',
            body: {},
            credentials: 'include',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0;Wind64;x64)',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            origin: "http://localhost:3306"
        }).then(
            function(response) {
                if (response.status !== 200) {
                    console.log("Login failed. Status: " + response.status);
                    that.setState({
                        logged: false
                    });
                    userid.value = "";
                    pwd.value = "";
                    return;
                }
                // response status = 200, login success
                response.json().then(
                    (data) => {
                        that.setState({
                            logged: true
                        });
                        console.log(JSON.stringify(data));
                        console.log("You login successfully in " + data.login_timestamp);
                        that.props.history.push("/");
                    }
                );
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
            <Input id='userId' icon='user' iconPosition='left' fluid placeholder="User ID"/>
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