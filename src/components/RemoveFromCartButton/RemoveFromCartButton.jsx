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
    if (item.amount === 1) {
        cartItems.splice(itemIndex, 1);
    } else {
        if (itemIndex !== -1) cartItems[itemIndex].amount -= 1;
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    return amountUpdate && amountUpdate();
  }

  render() {
    const { test } = this.props;
    return (
      <button type="button" data-testid={test} onClick={this.addToCart}>
        Remover do carrinho
      </button>
    );
  }
}

export default RemoveFromCartButton;
