import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import App from './js/App';
import Login from './js/account/login';
import Signup from './js/account/signup';
import Stock from './js/stock';
import registerServiceWorker from './registerServiceWorker';

// const history = createHistory();

// const location = history.location;

ReactDOM.render(
    <Router>
        <div>
            <Route path="/home" component={App}/>
            {/*<Route path="/search" component={Search} />
            <Route path="/cart" component={Cart}/>*/}
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path='/stock' component={Stock}/>
        </div>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
