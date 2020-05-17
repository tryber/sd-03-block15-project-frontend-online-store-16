import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

class ProductsList extends React.Component {
  render() {
    const { products, notFound } = this.props;
    console.log(products);
    
    return (
      <div>
        {notFound && <p>Nenhum produto foi encontrado</p>}
        {products &&
          products.map((data) => (
            <div key={data.id}>
              <ProductCard key={data.id} product={data} />
            </div>
          ))}
      </div>
    );
  }
}

export default ProductsList;
