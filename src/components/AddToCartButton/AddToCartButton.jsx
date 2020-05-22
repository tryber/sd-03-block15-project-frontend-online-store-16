import React from 'react';

class AddToCartButton extends React.Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    const { product, amountUpdate } = this.props;
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingItem = cartItems && cartItems.find((element) => element.id === product.id);
    const indexOfExistingItem = cartItems && cartItems.indexOf(existingItem);
    switch (true) {
      case (!!existingItem):
        cartItems[indexOfExistingItem].quantity += 1;
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        break;
      case (existingItem === undefined):
        product.quantity = 1;
        localStorage.setItem('cartItems', JSON.stringify([...cartItems, { ...product }]));
        break;
      default:
        product.quantity = 1;
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        break;
    }
    return amountUpdate && amountUpdate();
  }

  render() {
    const { test, children } = this.props;
    return (
      <button type="button" data-testid={test} onClick={this.addToCart}>
        {children}
      </button>
    );
  }
}

export default AddToCartButton;
