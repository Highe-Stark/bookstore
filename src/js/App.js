import React from 'react';
import { Divider } from 'semantic-ui-react';
import {Switch, Route} from 'react-router-dom';

import Home from './home/home';
import HeaderBar from './header';
import Footer from './footer';
import Navigator from './home/navigator';

import Cart from './cart/cart';
import Search from './search/search';
import Account from './account/account';
import '../css/home.css';

/*const homePage = () => {
    <div>

    </div>
}*/

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div className='home'>
                <HeaderBar history={this.props.history}/>
                <Navigator/>
                <div>
                    <Route path="/home" component={Home}/>
                    <Route path="/home/search" component={Search}/>
                    <Route path="/home/cart" component={Cart}/>
                    <Route path='/home/account' component={Account}/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
{/*<div className='home'>
                <HeaderBar/>
                <Navigator/>
                <div style={{margin: '3rem'}}>
                    <Home />
                </div>
                <Divider/>
                <div>
                    <Footer/>
                </div>
            </div>*/}
