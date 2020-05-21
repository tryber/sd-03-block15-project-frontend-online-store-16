import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes } from '@fortawesome/free-solid-svg-icons';

class Logo extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">
          <FontAwesomeIcon icon={faCubes} className="logo" />
          <span className="title">Clube dos 3</span>
        </Link>
      </div>
    );
  }
}

export default Logo;
