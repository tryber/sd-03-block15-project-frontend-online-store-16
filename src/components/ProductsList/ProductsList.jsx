import React from 'react';
import ProductCard from '../ProductCard/ProductCard'

class ProductsList extends React.Component {
  render() {
    const { products } = this.props;
    console.log(products)
    if (products.length === 0) return <p>Nenhum Produto foi encontrado</p>;
    return (
      <div>
        {products.results.map((data) => (
          <ProductCard key={data.id} product={data} />
        ))}
      </div>
    );
  }
}

export default ProductsList;
