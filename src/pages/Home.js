import React from 'react';
import SearchBar from '../components/SearchBar';
import CategoryList from '../components/CategoryList';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filter: '' };
  }

  render() {
    return (
      <div>
        <SearchBar />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CategoryList />
      </div>
    );
  }
}

export default Home;
