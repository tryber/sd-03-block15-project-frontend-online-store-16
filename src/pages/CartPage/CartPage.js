import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import BackButton from '../../components/BackButton/BackButton';
import EmptyCart from '../../components/EmptyCart/EmptyCart';
import './CartPage.css';

class CartPage extends React.Component {
  render() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    return (
      <div>
        <SearchBar />
        <div className="empty-message">
          <h2>
            <span>
              <BackButton />
            </span>
            Carrinho de Compras
          </h2>
        </div>
        {cartItems === null ? <EmptyCart /> : <p>Te ste</p> }
      </div>
    );
  }
}

export default CartPage;
