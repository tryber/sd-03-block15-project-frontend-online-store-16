import React from 'react';
import { getCategories } from '../../services/api';
import CategoryList from '../../components/CategoryList/CategoryList.jsx';
import SearchBar from '../../components/SearchBar/SearchBar.js';
import Request from '../../components/Request/Request.js';
import ProductsList from '../../components/ProductsList/ProductsList.js';
import './Home.css';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      category: null,
      searchInput: '',
      categories: [],
      results: null,
      loading: false,
      notFound: false,
    };
    this.handleCheck = this.handleCheck.bind(this);
    this.handleChanges = this.handleChanges.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    getCategories().then((categories) => this.setState({ categories }));
  }

  handleCheck(category) {
    this.setState({ category });
    this.update(category, this.searchInput);
  }

  handleChanges(event) {
    this.setState({ searchInput: event.target.value });
  }

  update(category, searchInput) {
    Request(category, searchInput).then(({ results }) =>
      this.setState({
        results,
        loading: true,
        notFound: results.length === 0,
      }),
    );
  }

  render() {
    const { category, categories, results, searchInput, loading } = this.state;
    return (
      <div>
        <div>
          <SearchBar
            handleChanges={this.handleChanges}
            update={this.update}
            searchInput={searchInput}
            category={category}
            loading={loading}
          />
        </div>
        <div className="content-container">
          <CategoryList categories={categories} handleCheck={this.handleCheck} />
          <div>
            {categories.length === 0 ? (
              <p data-testid="home-initial-message">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>
          ) : (
            <ProductsList products={results} />
          )}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
