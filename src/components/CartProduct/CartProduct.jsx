import React from 'react';
import PlusMinusButton from '../PlusMinusButton/PlusMinusButton';

class CartProduct extends React.Component {
  render() {
    const { product, forceUpdate } = this.props;
    const { title, thumbnail, price, quantity } = product;
    return (
      <div>
        <h3 data-testid="shopping-cart-product-name">{title}</h3>
        <div>{quantity} de R$ {price.toFixed(2)} por R$ {(quantity * price).toFixed(2)}</div>
        <img src={thumbnail} alt={title} />
        <div>
          <PlusMinusButton
            product={product}
            testAmount="shopping-cart-product-quantity"
            testAdd="product-increase-quantity"
            testSubtract="product-decrease-quantity"
            forceUpdate={forceUpdate}
          />
        </div>
      </div>
    );
  }
}

export default CartProduct;
