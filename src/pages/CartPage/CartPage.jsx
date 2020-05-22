import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import BackButton from '../../components/BackButton/BackButton';
import EmptyCart from '../../components/EmptyCart/EmptyCart';
import CartItems from '../../components/CartItems/CartItems';
import './cartPage.css';

class CartPage extends React.Component {
  render() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    return (
      <div>
        <SearchBar />
        <div className="empty-message">
          <h2><span><BackButton /></span>Carrinho de Compras</h2>
        </div>
        {cartItems === null
        ? <EmptyCart />
        : <CartItems cartItems={cartItems || []} forceUpdate={() => this.forceUpdate()} />
        }
      </div>
    );
  }
}

export default CartPage;
