import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchBar extends React.Component {
  render () {
    return (
      <section className="input-wrapper">
        <FontAwesomeIcon icon={faSearch} className="searchIcon" />
        <input type="text" onChange={this.setSearch}/>
      </section>
    )
  }
}

export default SearchBar;
