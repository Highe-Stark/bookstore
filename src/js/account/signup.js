import React, {Component} from 'react';
import { Grid, Form, Button, Header, Segment } from 'semantic-ui-react';

import '../../css/login.css';

class Signup extends Component {
  constructor(props) {
    super(props);
      this.state = {
          phoneErr : false,
          emailErr: false,
          nameErr: false,
          pwdErr : false,
          pwdEqual : false
      }

  }

  checkName=() => {
    this.setState({
        nameErr: false
    });
  }

  checkPhone=() => {
      let phone = document.getElementById("phone").value;
      let phoneReg = /^1[0-9]{10}$/;
      if (phone.length === 0 || (phone.length === 11 && phoneReg.test(phone))) {
          this.setState({
              phoneErr: false
          });
      } else {
        this.setState({
            phoneErr: true
        });
      }
  }


  checkEmail=() => {
    let email = document.getElementById("email").value;
    let emailReg = /^[\w\-]+@[\w\.]+\w$/;
    this.setState({
        emailErr : !emailReg.test(email)
    });
  }

  checkPwd=() => {
    let pwd = document.getElementById("pwd").value;
    let pwdreg = /^[A-Za-z0-9]{6,16}$/;
    this.setState({
        pwdErr : !pwdreg.test(pwd)
    });
  }

  checkRepwd=() => {
    let pwd = document.getElementById("pwd").value;
    let repwd = document.getElementById("repwd").value;
    this.setState({
        pwdEqual : !(pwd === repwd)
    });
  }

  render() {
    return (
      <div id='signup_form' className="login">
        <Grid textAlign="center" verticalAlign='middle' style={{ height: '100%' }}>
          <Grid.Column style={{ maxWidth: 500 }}>
            <Header as='h2' color='teal' textAlign="center">Sign Up</Header>
            <Form size='large'>
              <Segment piled>
                <Form.Input id='name' fluid icon='user' focus error={this.state.nameErr} iconPosition='left'
                            placeholder='User ID' onChange={this.checkName}/>
                <Form.Input id='phone' fluid icon='phone' focus error={this.state.phoneErr} iconPosition='left'
                            placeholder='Phone Number'onChange={this.checkPhone}/>
                <Form.Input id='email' fluid icon='mail' focus error={this.state.emailErr} iconPosition='left'
                            placeholder='Email Address' type='email' onChange={this.checkEmail}/>
                <Form.Input id='pwd' fluid icon='lock' focus error={this.state.pwdErr } iconPosition='left'
                            type='password' placeholder='Password' onChange={this.checkPwd}/>
                <Form.Input id='repwd' fluid icon='lock' focus error={this.state.pwdEqual}  iconPosition='left' type='password'
                            placeholder='Reenter your password' onChange={this.checkRepwd}/>
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