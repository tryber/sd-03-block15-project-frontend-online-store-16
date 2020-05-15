import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filter: '' };
    this.setSearch = this.setSearch.bind(this);
  }

  setSearch(event) {
    this.setState({ filter: event.target.value });
  }

  render() {
    return (
      <section className="input-wrapper">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input type="text" onChange={this.setSearch} />
      </section>
    );
  }
}

export default SearchBar;
