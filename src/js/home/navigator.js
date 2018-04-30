import React, {Component} from 'react';
import { Grid, Label} from 'semantic-ui-react';

class Navigator extends Component {
    render() {
        return (
            <Grid style={{paddingTop: '2rem', paddingBottom: '2rem', marginLeft : '1rem', marginRight: '1rem' }} relaxed>
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
            </Grid>
        )
    }
}

export default Navigator;