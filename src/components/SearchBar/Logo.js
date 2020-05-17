import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes } from '@fortawesome/free-solid-svg-icons';

class Logo extends React.Component {
  render() {
    return (
      <div>
        <FontAwesomeIcon icon={faCubes} className="logo" />
        <span className="title">Clube dos 3</span>
      </div>
    );
  }
}

export default Logo;
