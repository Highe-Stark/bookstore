import React from 'react';
import { Divider } from 'semantic-ui-react';

import Home from './home/home';
import HeaderBar from './header';
import Footer from './footer';
import Navigator from './home/navigator';

import '../css/home.css';

class App extends React.Component {
    render() {
        return (
            <div className='home'>
                <HeaderBar/>
                <Navigator/>
                <div style={{margin: '3rem'}}>
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