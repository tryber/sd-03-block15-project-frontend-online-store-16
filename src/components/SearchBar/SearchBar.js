import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import CartButton from '../CartButton/CartButton.js';
import Logo from './Logo.js';
import './SearchBar.css';

class SearchBar extends React.Component {

  render() {
    const {
      inputSearch,
      category,
      handleChanges,
      update,
    } = this.props;
    return (
      <section className="header">
        <Logo />
        <section className="input-wrapper">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            data-testid="query-input"
            type="text"
            value={inputSearch}
            onChange={(event) => handleChanges(event)}
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={() => update(inputSearch, category)}
          >
            Buscar
          </button>
        </section>
        <CartButton />
      </section>
    );
  }
}

export default SearchBar;
