import React from 'react';
import {Header, Image, Segment, Dropdown, Input, Icon, Divider } from 'semantic-ui-react';

import Home from './home/home';
import HeaderBar from './header';
import Footer from './footer';
import Book from '../img/Books-2.jpg';

class App extends React.Component {
    render() {
        return (
            <div>
                <HeaderBar/>
                <div margin="5rem">
                    <Home />
                </div>
                <Divider/>
                <div>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App;