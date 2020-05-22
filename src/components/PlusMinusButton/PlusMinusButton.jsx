import React from 'react';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import RemoveFromCartButton from '../RemoveFromCartButton/RemoveFromCartButton';

class PlusMinusButton extends React.Component {
  constructor(props) {
    super(props);
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];;
    const quantity = cartItems && cartItems.some((item) => item.id === props.product.id)
      ? cartItems.find((item) => item.id === props.product.id).quantity : 0;
    this.state = { quantity };
    this.amountUpdate = this.amountUpdate.bind(this);
  }

  amountUpdate() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];;
    const { product, forceUpdate } = this.props;
    const item = cartItems.find((item) => item.id === product.id)
    forceUpdate()
    if (item) {
      const { quantity } = item;
      return this.setState({ quantity });
    }
    return this.setState({ quantity: 0 });
  }

  render() {
    const { product, testAmount, testAdd, testRemove } = this.props;
    const { quantity } = this.state;
    return (
      <div className="product-button">
        <AddToCartButton
          product={product}
          testid={testAdd}
          amountUpdate={this.amountUpdate}
        >
          +
        </AddToCartButton>
        <label htmlFor="quantidade" data-testid={testAmount}>{quantity}</label>
        <RemoveFromCartButton
          product={product}
          amountUpdate={this.amountUpdate}
          test={testRemove}
        >
          -
        </RemoveFromCartButton>
      </div>
    );
  }
}

export default PlusMinusButton;
