import React from 'react';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { id, title, thumbnail, price } = product;
    return (
      <div data-testid="product">
        <h4>{title}</h4>
        <h5>{id}</h5>
        <img src={thumbnail} alt={title} />
        <h5>
          {`Preço: R$ ${price.toFixed(2)}`}
        </h5>
      </div>
    ) }
}

export default ProductCard;
