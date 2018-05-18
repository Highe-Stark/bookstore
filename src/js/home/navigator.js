'use strict';
import React, {Component} from 'react';
import { Button } from 'semantic-ui-react';
// HISTORY, EDUCATION, TOOL, COMPUTER, POLITICAL, MILITARYY, SCIENCE, CHILDREN, FOOD, PHOTOGRAPHY
const catagory = ['History', 'Education', 'Tool', 'Computer', 'Political', 'Military', 'Science', 'Children', 'Food', 'Photography'];

class Navigator extends Component {
    constructor (props) {
        super(props);
        this.state = {
            catagory : catagory
        }
    }

    // not work
    _toggleSort=(e, value) => {
        console.log(value.content);
        console.log(this.path);
        this.props.history.state = {catagory : value.content};
        console.log(this.props.history);
        // console.log(this.state.catagory[idx]);
    }

    render() {
        return (
            <div>
                <Button.Group size='medium'>
                    {this.state.catagory.map((cata, idx) => {
                        return (
                            <Button content={cata} key={idx} value={idx} onClick={this._toggleSort}/>
                        )
                    })}
                </Button.Group>
            </div>
        )
    }
}

export default Navigator;

    {/*<Grid style={{paddingTop: '2rem', paddingBottom: '2rem', marginLeft : '1rem', marginRight: '1rem' }} relaxed>
                <Grid.Row>
                    <Grid.Column>
                        <Label as='a' size='large'>History</Label>
                    </Grid.Column>
                    <Grid.Column>
                        <Label as='a' size='large'>Literature</Label>
                    </Grid.Column>
                    <Grid.Column>
                        <Label as='a' size='large'>Comic</Label>
                    </Grid.Column>
                    <Grid.Column>
                        <Label as='a' size='large'>Magazine</Label>
                    </Grid.Column>
                    <Grid.Column>
                        <Label as='a' size='large'>Military</Label>
                    </Grid.Column>
                </Grid.Row>
            </Grid>*/}
