import React, {Component} from 'react';
import { Grid, Label} from 'semantic-ui-react';

class Navigator extends Component {
    render() {
        return (
            <Grid style={{paddingTop: '2rem', paddingBottom: '2rem', marginLeft : '1rem', marginRight: '1rem' }}>
                <Grid.Row>
                    <Grid.Column relaxed>
                        <Label as='a'>History</Label>
                    </Grid.Column>
                    <Grid.Column>
                        <Label as='a'>Literature</Label>
                    </Grid.Column>
                    <Grid.Column>
                        <Label as='a'>Comic</Label>
                    </Grid.Column>
                    <Grid.Column>
                        <Label as='a'>Magazine</Label>
                    </Grid.Column>
                    <Grid.Column>
                        <Label as='a'>Military</Label>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default Navigator;