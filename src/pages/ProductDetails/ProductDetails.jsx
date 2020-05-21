import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import PlusMinusButton from '../../components/PlusMinusButton/PlusMinusButton';
import AddToCartButton from '../../components/AddToCartButton/AddToCartButton';
import ProductRating from '../../components/ProductRating/ProductRating';
import './productDetails.css';

class ProductDetails extends React.Component {
  render() {
    const { location: { state } } = this.props;
    const { product } = this.props;

    if (!state) return <p>Loading...</p>;

    return (
      <div>
        <SearchBar />
        <h1 className="productTitle">Detalhes do Produto</h1>
        <div className="productDetails">
          <h3 data-testid="product-detail-name">
            {state.title}
            <br />
            {`R$ ${state.price}`}
          </h3>
        </div>
        <div className="productDetails">
          <img src={state.thumbnail} alt={state.title} />
        </div>
        <div className="productDetails">
          <h5 className="productDetails">Especificações técnicas:</h5>
          <p>
            {state.condition}
          </p>
        </div>
        <PlusMinusButton
          product={product}
          testAdd="product-detail-add-to-cart"
          testSubtract="product-decrease-quantity"
          testAmount="shopping-cart-product-quantity"
        />
        <AddToCartButton>
          Adicionar ao carrinho
        </AddToCartButton>
        <ProductRating />
      </div>
    );
  }
}

export default ProductDetails;
