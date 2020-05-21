import React from 'react';
import CartProduct from '../CartProduct/CartProduct';

class CartItems extends React.Component {
  render() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    return (
      <div>
        {cartItems.map((item) => (
          <CartProduct key={item.id} product={item} />
        ))}
      </div>
    );
  }
}

export default CartItems;
