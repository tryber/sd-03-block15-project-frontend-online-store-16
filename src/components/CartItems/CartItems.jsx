import React from 'react';
// import { Link } from 'react-router-dom';

class CardItems extends React.Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }
}

export default CardItems;
