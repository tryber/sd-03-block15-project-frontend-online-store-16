import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link
          data-testid="product-detail-link"
          to={{
            pathname: `/product/${product.id}`,
            state: product,
          }}
        >
          Mais detalhes
        </Link>
      </div>
    );
  }
}

export default ProductCard;
