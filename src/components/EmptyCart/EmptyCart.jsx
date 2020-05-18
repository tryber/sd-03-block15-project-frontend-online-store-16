import React from 'react';
import EmptyCartImage from '../../images/emptyCart.png';
import Wheel from '../../images/wheel.png';

class EmptyCart extends React.Component {
  render() {
    return (
      <section className="empty-container">
        <h3 data-testid="shopping-cart-empty-message" className="empty-message">
          Seu carrinho está vazio
        </h3>
        <p className="sale-text">Não deixe de aproveitar nossas promoções!</p>
        <img src={EmptyCartImage} alt="Empty Cart Page Icon" className="empty-cart-image" />
        <div className="wheel-container">
          <img src={Wheel} alt="Wheel rolling animation" className="wheel1" />
          <img src={Wheel} alt="Wheel rolling animation" className="wheel2" />
        </div>
      </section>
    );
  }
}

export default EmptyCart;