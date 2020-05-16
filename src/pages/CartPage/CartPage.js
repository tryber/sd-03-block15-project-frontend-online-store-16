import React from 'react';
import Header from '../../components/Header/Header.js';
import BackButton from '../../components/BackButton/BackButton.js';
import EmptyCart from '../../images/emptyCart.png';
import Wheel from '../../images/wheel.png';
import './CartPage.css';

class CartPage extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <section className="empty-container">
          <h2 data-testid="shopping-cart-empty-message" className="empty-message">
            <span><BackButton /></span>
            Seu carrinho está vazio
          </h2>
          <p className="sale-text">Não deixe de aproveitar nossas promoções!</p>
          <img src={EmptyCart} alt="Empty Cart Page Icon" className="empty-cart-image" />
          <div className="wheel-container">
            <img src={Wheel} alt="Wheel rolling animation" className="wheel1" />
            <img src={Wheel} alt="Wheel rolling animation" className="wheel2" />
          </div>
        </section>
      </main>
    );
  }
}

export default CartPage;
