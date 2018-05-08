import React from 'react';
import {Image} from 'semantic-ui-react';
import EmptyCollection from '../../img/empty-collection.png';

class Collection extends React.Component {
    render() {
        return (
            <div>
                <Image src={EmptyCollection} fluid href='/home'/>
            </div>
        )
    }
}

export default Collection;