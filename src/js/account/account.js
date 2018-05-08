import React from 'react';
import {Grid, Header, Icon, Segment} from 'semantic-ui-react';
import {NavLink, Link, Route} from 'react-router-dom';

import UserInfo from './userInfo';
import Collection from './collection';

class Account extends React.Component {
    render () {
        return (
            <Grid columns={2} style={{paddingLeft: '1rem', paddingRight: '1rem'}}>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <Segment.Group>
                            <Segment>
                                <Header>
                                    <Icon name='setting' size='small'/>{' '}Account Setting
                                </Header>
                            </Segment>
                            <Segment>
                                <NavLink to='/home/account/info'>
                                    <Icon name='user' size='small'/>{' '}User Info
                                </NavLink>
                            </Segment>
                            <Segment>
                                <Link to='/home/account/collection'>
                                    <Icon name='star' color='yellow'/>{' '}Collection
                                </Link>
                            </Segment>
                        </Segment.Group>
                    </Grid.Column>
                    <Grid.Column width={13}>
                        {
                            // we will jump to info page
                        }
                        <Route path='/home/account/info' component={UserInfo}/>
                        <Route path='/home/account/collection' component = {Collection}/>

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default Account;