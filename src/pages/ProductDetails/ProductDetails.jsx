import React from 'react';

class ProductDetails extends React.Component {
  render() {
    const { location: { state } } = this.props;

    if (!state) return <p>Loading...</p>;

    return (
      <div>
        <div>
          <h3 data-testid="product-detail-name">
            {state.title}
            <br />
            {`R$ ${state.price}`}
          </h3>
        </div>
        <div>
          <img src={state.thumbnail} alt={state.title} />
        </div>
        <div>
          <h5>Especificações técnicas:</h5>
          <p>
            {state.condition}
          </p>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
