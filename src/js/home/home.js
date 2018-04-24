import React from 'react';
import { NavLink } from 'react-router-dom';
import {Dropdown} from 'semantic-ui-react';

class Home extends React.Component {
    /* constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen : false
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }*/

    render() {
        return (
            <Dropdown text='Account' icon='user' floating labeled button className='icon'>
                <Dropdown.Menu>
                    <Dropdown.Item text="Sign in"/>
                    <Dropdown.Item text="Sign up"/>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}

export default Home;