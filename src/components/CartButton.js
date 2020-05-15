import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

class CartButton extends React.Component {
  render() {
    return (
      <Link to="/shopping-cart" data-testid="shopping-cart-button">
        <FontAwesomeIcon icon={faCartArrowDown} className="cart-icon" />
      </Link>
    );
  }
}

export default CartButton;
