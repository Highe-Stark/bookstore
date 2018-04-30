import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import App from './js/App';
import Cart from './js/cart/cart';
import Login from './js/account/login';
import Signup from './js/account/signup';
import Search from './js/search/search';
import Account from './js/account/account';
// import UserInfo from './js/account/userInfo';
// import Collection from './js/account/collection';
import registerServiceWorker from './registerServiceWorker';

// const history = createHistory();

// const location = history.location;

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/search" component={Search} />
            <Route path="/cart" component={Cart}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path='/account' component={Account}>
            </Route>
        </div>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
