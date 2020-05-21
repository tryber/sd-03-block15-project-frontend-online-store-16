import React from 'react';

class RemoveFromCartButton extends React.Component {
  constructor(props) {
    super(props);
    this.remove = this.remove.bind(this);
  }

  remove() {
    const { product, amountUpdate } = this.props;
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    const item = cartItems.find((item) => item.id === product.id);
    const itemIndex = cartItems.indexOf(item);
    if (item.quantity === 1) {
        cartItems.splice(itemIndex, 1);
    } else {
        if (itemIndex !== -1) cartItems[itemIndex].quantity -= 1;
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
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

export default RemoveFromCartButton;
