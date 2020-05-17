import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filter: '' };
    this.setSearch = this.setSearch.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  setSearch(event) {
    this.setState({ filter: event.target.value });
  }

  handleSearchSubmit() {
    const { onClick } = this.props;
    const { filter } = this.state;
    onClick(filter);
  }

  render() {
    return (
      <section className="input-wrapper">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input data-testid="query-input" type="text" onChange={this.setSearch} />
        <button
          data-testid="query-button"
          type="button"
          onClick={this.handleSearchSubmit}
        >
          Pesquisar
        </button>
      </section>
    );
  }
}

export default SearchBar;
