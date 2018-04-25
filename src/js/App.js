import React from 'react';
import {Header, Image, Segment, Dropdown, Input, Icon } from 'semantic-ui-react';

import Home from './home/home';
import HeaderBar from './header';

import Book from '../img/Books-2.jpg';

class App extends React.Component {
    render() {
        return (
            <div>
                <HeaderBar/>
                <div>
                    <Home />
                </div>
            </div>
        );
    }
}

export default App;