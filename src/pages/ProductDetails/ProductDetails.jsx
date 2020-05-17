import React from 'react';

class ProductDetails extends React.Component {
  render() {
    const { location: { state: { product: { title, thumbnail, price } } } } = this.props;
    return (
      <div>
        <h2 data-testid="product-detail-name">{title}</h2>
        <img src={thumbnail} alt={title} />
        <p>{price}</p>
      </div>
    );
  }
}

export default ProductDetails;
