'use strict';
import React, {Component} from 'react';
import { Grid, Form, Button, Header, Segment, Modal, Icon } from 'semantic-ui-react';

import '../../css/login.css';

class Signup extends Component {
  constructor(props) {
    super(props);
      this.state = {
          modalOpen : false,
          phoneErr : false,
          emailErr: false,
          nameErr: false,
          pwdErr : false,
          pwdNotEqual : false
      }
  }

  checkName=() => {
    let name = document.getElementById("name").value;
    let nameReg = /^\w{6,20}$/;
    if (nameReg.test(name)) {
        this.setState({
            nameErr : false
        })
    } else {
        this.setState({
            nameErr : true
        })
    }
  };

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
  };

  checkEmail=() => {
    let email = document.getElementById("email").value;
    let emailReg = /^[\w\-]+@[\w\.]+\w$/;
    this.setState({
        emailErr : !emailReg.test(email)
    });
  };

  checkPwd=() => {
    let pwd = document.getElementById("pwd").value;
    let pwdreg = /^[A-Za-z0-9]{6,16}$/;
    this.setState({
        pwdErr : !pwdreg.test(pwd)
    });
  };

  checkRepwd=() => {
    let pwd = document.getElementById("pwd").value;
    let repwd = document.getElementById("repwd").value;
    this.setState({
        pwdNotEqual : !(pwd === repwd)
    });
  };

  handleClose = () => this.setState({modalOpen : false});

  _signup = () => {
      if (this.state.nameErr || this.state.emailErr || this.state.phoneErr || this.state.pwdErr || this.state.pwdNotEqual ) {
          this.setState({modalOpen : true});
          alert("Invalid");
          return;
      }
      let name = document.getElementById('name').value;
      let phone = document.getElementById('phone').value;
      let email = document.getElementById('email').value;
      let pwd = document.getElementById('pwd').value;
      if (!(name.length > 0 && phone.length > 0 && email.length > 0 && pwd.length > 0)) {
          this.setState({modalOpen : true});
          alert("invalid");
          return;
      }
      const url = "http://localhost:8080/u/signup";
      let body = 'userName=' + name + '&pwd=' + pwd + '&phone=' + phone + '&email=' + email;
      fetch (url, {
          body : body,
          method : 'POST',
          credentials : 'include',
          headers : {
              'Content-Type' : 'application/x-www-form-urlencoded'
          },
          origin : 'http://localhost:3000'
      }).then (response => {
          if (response === null) return null;
          if (response.status !== 200) {
              if (response.status == 403) {
                  alert("User name is used.");
                  this.props.history.push('/signup');
                  return;
              }
          }
          let ret = response.json();
          console.log(ret.message);
          this.props.history.push('/login');
      }).catch (err => {
          alert("Error occurred while sign up." + err);
      })
  };

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
                            placeholder='Phone Number' onChange={this.checkPhone}/>
                <Form.Input id='email' fluid icon='mail' focus error={this.state.emailErr} iconPosition='left'
                            placeholder='Email Address' type='email' onChange={this.checkEmail}/>
                <Form.Input id='pwd' fluid icon='lock' focus error={this.state.pwdErr } iconPosition='left'
                            type='password' placeholder='Password' onChange={this.checkPwd}/>
                <Form.Input id='repwd' fluid icon='lock' focus error={this.state.pwdNotEqual} iconPosition='left' type='password'
                            placeholder='Reenter your password' onChange={this.checkRepwd}/>
                <Button color='teal' fluid size='large' onClick={this._signup}>Sign up</Button>
                {/*<Modal trigger={<Button color='teal' fluid size='large' onClick={this._signup}>Sign up</Button>}
                  open={this.state.modalOpen}
                       onClose={this.handleClose}
                       basic
                       size='fullscreen'
                       >
                    <Header><Icon name='warning sign' color='red'/>Error</Header>
                    <Modal.Content>
                        <h3>Each item must be filled properly.</h3>
                    </Modal.Content>
                    <Modal.Action>
                        <Button color='red' onClick={this.handleClose} inverted>
                            <Icon name='checkmark'/>Got it
                        </Button>
                    </Modal.Action>
                </Modal>*/}
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default Signup;