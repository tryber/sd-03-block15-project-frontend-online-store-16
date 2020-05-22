import React from 'react';
import CartProduct from '../CartProduct/CartProduct';

class CartItems extends React.Component {
  render() {
    const { cartItems } = this.props;
    const sum = cartItems.reduce((a, b) => a + (parseFloat(b.price) * (b.quantity)), 0);
    return (
      <div>
        {cartItems.map((item) => (
          <CartProduct key={item.id} product={item} forceUpdate={this.props.forceUpdate} />
        ))}
        TOTAL: R$ { sum.toFixed(2) }
      </div>
    );
  }
}

export default CartItems;
