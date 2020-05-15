import React from 'react';
import EmptyCart from '../images/emptyCart.png';

class CartPage extends React.Component {
  render() {
    return (
      <section>
        <h2 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h2>
        <img src={EmptyCart} alt="Empty Cart Page" />
      </section>
    );
  }
}

export default CartPage;
