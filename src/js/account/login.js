import React, {Component} from 'react';
import { Button, Form, Grid, Segment, Header, Icon, Input, Message} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
// import {History} from 'react-router-dom';
import '../../css/login.css';

// import Background from '../../img/Books-3.jpg';
class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            logged: false
        }
    }


    _login() {
        let formData = new FormData();
        formData.append("userId", document.getElementById("userId").value);
        formData.append("pwd", document.getElementById("pwd").value);

        let url = "http://localhost:8080/login";
        fetch (url, {
            method: 'POST',
            body: formData,
            dataType: "text",
        }).then(
            function(response) {
                if (response.status !== 200) {
                    console.log("Login failed. Status: " + response.status);
                    this.setState({
                        logged: true
                    });
                    this.props.history.push('/');
                    return;
                }
                response.json().then(
                    function(data) {
                        if (data.code === 1) {
                            this.setState({
                                value: data.data.code
                            })
                            console.log(data.data.code);
                        }
                    }
                );
            }
        ).catch(function(err) {
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

export default Login;