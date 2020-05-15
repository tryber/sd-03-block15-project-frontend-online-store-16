import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../SearchBar/SearchBar';
import CartButton from '../CartButton/CartButton.js';
import './Header.css';


class Header extends React.Component {
  render() {
    return (
      <section className="header">
        <div>
          <FontAwesomeIcon icon={faCubes} className="logo" />
          <span className="title">Clube dos 3</span>
        </div>
        <SearchBar />
        <CartButton />
      </section>
    );
  }
}

export default Header;
