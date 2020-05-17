import React from 'react';
import Header from '../../components/Header/Header.js';
import CategoryList from '../../components/CategoryList/CategoryList';
import SearchBar from '../../components/SearchBar/SearchBar'
import ProductsList from '../../components/ProductsList/ProductsList'
import * as api from '../../services/api'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      product: [],
      selected: '',
      test: true,
      categories: [],
    };
    this.componentDidMount = this.componentDidMount.bind(this)
    this.componentDidUpdate = this.componentDidUpdate.bind(this)
    this.takeData = this.takeData.bind(this)
  }

  componentDidMount() {
    return api
      .getCategories()
      .then((data) => this.setState({ categories: data }))
      .catch(() => console.log('Erro de Requisição'));
  }

  componentDidUpdate() {
    const { test, selected, filter } = this.state
    if (test) {
      api.getProductsFromCategoryAndQuery(selected, filter)
        .then(el => this.setState({
          product: el,
          test: false
        }));
    }
  }

  takeData(filter) {
    this.setState({ test: true, filter })
  }

  render() {
    const { product } = this.state
    return (
      <div>
        <Header />
        <SearchBar onClick={this.takeData}/>
        <CategoryList />
        <div>
          {product.length === 0 ? (
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          ) : (
            <ProductsList products={product}/>
          )}
        </div>
      </div>
    );
  }
}

export default Home;
