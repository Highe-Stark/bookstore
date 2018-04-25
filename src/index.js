import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import {BrowserRouter } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';

import App from './js/App';
import Cart from './js/cart/cart';
import Login from './js/login/login';
import Signup from './js/login/signup';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/" component={App}/>
            <Route path="cart" component={Cart}/>
            <Route path="login" component={Login}/>
            <Route path="signup" component={Signup}/>
        </div>
    </BrowserRouter>, 
    document.getElementById('root'));
registerServiceWorker();
