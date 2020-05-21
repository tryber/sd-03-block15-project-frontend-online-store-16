import React from 'react';
import { Link } from 'react-router-dom';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import './productCard.css';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { id, title, thumbnail, price } = product;
    return (
      <div data-testid="product" className="product">
        <h4 className="product-title">{title}</h4>
        <h5 className="product-id">{id}</h5>
        <img src={thumbnail} alt={title} className="product-image" />
        <h5 className="product-price">
          {`Preço: R$ ${price.toFixed(2)}`}
        </h5>
        <Link
          className="product-details"
          data-testid="product-detail-link"
          to={{
            pathname: `/product/${product.id}`,
            state: product,
          }}
        >
          Mais detalhes
        </Link>
        <AddToCartButton product={product} test="product-add-to-cart">
          Adicionar ao carrinho
        </AddToCartButton>
      </div>
    );
  }
}

export default ProductCard;
