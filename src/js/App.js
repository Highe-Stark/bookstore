import React from 'react';
import {Header, Image, Segment, Dropdown, Input, Icon } from 'semantic-ui-react';

import Home from './home/home';

import Book from '../img/Books-2.jpg';

class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Segment.Group horizontal compact>
                        <Segment floated='left'>
                            <Header as="h2">
                                <Image circular src={Book} height='20rem' verticalAlign='middle' />
                                {' '}书轩
                        <Header.Subheader>
                                    <p>Enjoy Book, Enjoy Life.</p>
                                </Header.Subheader>
                            </Header>
                        </Segment>
                        <Segment>
                            <Input icon={<Icon name='search' inverted circular link />}
                                placeholder="Search..." fluid focus
                            />
                        </Segment>
                        <Segment textAlign='center' floated='right'>
                            <Dropdown icon='user' floating labeled button>
                                <Dropdown.Menu>
                                    <Dropdown.Item text="Sign in" />
                                    <Dropdown.Item text="Sign up" />
                                </Dropdown.Menu>
                            </Dropdown>
                        </Segment>
                    </Segment.Group>
                </div>
                <div>
                    <Home />
                </div>
            </div>
        );
    }
}

export default App;