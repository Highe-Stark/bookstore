import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import {BrowserRouter } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';

import App from './js/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/" component={App}/>
        </div>
    </BrowserRouter>, 
    document.getElementById('root'));
registerServiceWorker();
