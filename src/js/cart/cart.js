import React, {Component} from 'react';
import { Divider, Container} from 'semantic-ui-react';
import HeaderBar from '../header';

class Cart extends Component {
  render() {
    return (
      <div>
        <HeaderBar/>
        <Divider/>
        <Container>
          Pretend to have a cart here.
        </Container>
        </div>
    )
  }
}

export default Cart;