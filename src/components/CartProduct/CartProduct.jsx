import React from 'react';

import PlusMinusButton from './PlusMinusButton';

class CartProduct extends React.Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail } = product;
    return (
      <div>
        <h3 data-testid="shopping-cart-product-name">{title}</h3>
        <img src={thumbnail} alt={title} />
        <div>
          <PlusMinusButton
            product={product}
            testAmoun="shopping-cart-product-quantity"
            testAdd="product-increase-quantity"
            testSubtract="product-decrease-quantity"
          />
        </div>
      </div>
    );
  }
}

export default CartProduct;
