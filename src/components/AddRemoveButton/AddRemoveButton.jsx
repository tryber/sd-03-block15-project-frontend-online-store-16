import React from 'react';
import { render } from '@testing-library/react';

class AddRemoveButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { amount: 1 };
    this.addToCardButton = this.addToCardButton.bind(this);
    this.removeFromCartButton = this.removeFromCartButton.bind(this);
  }

  addToCardButton() {
    this.setState((state) => ({ amount: state.amount + 1 }));
  }

  removeFromCartButton() {
    const { amount } = this.state;
    if (amount >= 1) {
      this.setState((state) => ({ amount: state.amount - 1 }));
    } else {
      this.setState({ amount: 0 })
    }
  }

  render() {
    return (
      <div data-testid="product-detail-add-to-cart">
        <button onClick={this.addToCardButton}>+</button>
        <span>{this.state.amount}</span>
        <button onClick={this.removeFromCartButton}>-</button>
      </div>
    );
  }
}

export default AddRemoveButton;
