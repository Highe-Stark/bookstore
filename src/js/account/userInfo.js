'use strict';

import React from 'react';
import {Segment, Input, Image, Icon, Radio, Label, Form, Button} from 'semantic-ui-react';

import head_portrait from '../../img/readingbook.jpg';

class Info extends React.Component {
    render () {
        return (
            <Segment.Group>
                <Segment.Group horizontal>
                    <Segment compact>
                        <Image circular src={head_portrait} size='small' centered/>
                    </Segment>
                    <Segment>
                        <Form>
                            <Form.Group>
                                <Form.Field inline>
                                    {'User Name: '}
                                    <Input disabled value="shuxuan"/>
                                </Form.Field>
                            </Form.Group>
                            <Form.Group>
                                <Form.Field inline>
                                    {'Nick Name: '}
                                    <Input placeholder='React Semantic UI'/>
                                </Form.Field>
                            </Form.Group>
                            <Form.Group inline>
                                {'Sex: '}
                                <Form.Field>
                                    <Radio value='male'/><Icon name='male'/>
                                </Form.Field>
                                <Form.Field>
                                    <Radio value='female'/><Icon name='woman'/>
                                </Form.Field>
                            </Form.Group>
                        </Form>
                    </Segment>
                </Segment.Group>
                <Segment>
                    <Form>
                        <Form.Field inline>
                            {'User email: '}
                            <Input type='mail' placeholder='shuxuan@example.com' fluid/>
                        </Form.Field>
                        <Form.Field inline>
                            {'User Address: '}
                            <Input type='text' placeholder='No.800 Dongchuan Road, Minhang, Shanghai' fluid/>
                        </Form.Field>
                        <Form.Field inline label='Phone' type='text' placeholder='021-54749110' control={Input}/>
                    </Form>
                </Segment>
                <Segment textAlign='center'>
                    <Button>Update My Info</Button>
                </Segment>
            </Segment.Group>
        );
    }
}

export default Info;