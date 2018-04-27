import React from 'react';
import {Segment, Input, Image, Icon, Radio, Label, Form} from 'semantic-ui-react';

import head_portrait from '../../img/readingbook.jpg';

class Info extends React.Component {
    render () {
        return (
            <Segment.Group>
                <Segment>
                    <Image size='medium' circular src={head_portrait}/>
                    <Form>
                        <Form.Field>
                            <Label>Nick Name: </Label>
                            <Input disabled value="React"/>
                        </Form.Field>
                        <Form.Field>
                            <Label>Sex: </Label>
                            <Radio value='male'>
                                <Icon name='man'/>
                            </Radio>
                            <Radio value='female'>
                                <Icon name='woman'/>
                            </Radio>
                        </Form.Field>
                    </Form>
                </Segment>
                <Segment>
                    <Form>
                        <Form.Field>
                            <Label>User email: </Label>
                            <Input disabled value='react@gmail.com' type='mail'/>
                        </Form.Field>
                        <Form.Field>
                            <Label>User Address: </Label>
                            <Input type='text' value='mit'/>
                        </Form.Field>
                    </Form>
                </Segment>
            </Segment.Group>
        );
    }
}

export default Info;