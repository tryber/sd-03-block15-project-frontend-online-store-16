import React from 'react';
import { Link } from 'react-router-dom';

class AddButton extends React.Component {
  render() {
    return (
      <Link
        type="button"
        to="/shopping-cart"
        data-testid="product-add-to-cart"
      >
        Add Carrinho
      </Link>
    );
  }
}

export default AddButton;
