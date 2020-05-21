import React, { Component } from 'react';

class AddToCartButton extends Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this); 
  }

  addToCart() {
    const { product, amountUpdate } = this.props;
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    const existingItem = cartItems && cartItems.find((element) => element.id === product.id);
    const indexOfExistingItem = cartItems && cartItems.indexOf(existingItem);

    switch (true) {
      case (!!existingItem):
        cartItems[indexOfExistingItem].amount += 1;
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        return amountUpdate && amountUpdate();
      case (existingItem === undefined):
        product.amount = 1;
        localStorage.setItem('cartItems', JSON.stringify([...cartItems, { ...product }]));
        return amountUpdate && amountUpdate();
      default:
        product.amount = 1;
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        return amountUpdate && amountUpdate();
    }
  }

  render() {
    const { children, test } = this.props;
    return (
      <button type="button" data-testid={test} onClick={this.addToCart}>
        { children }
      </button>
    );
  }
}

export default AddToCartButton;
