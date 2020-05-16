import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import './BackButton.css';

class BackButton extends React.Component {
  render() {
    return (
      <Link to="/">
        <FontAwesomeIcon icon={faBackward} className="back-icon" />
      </Link>
    );
  }
}

export default BackButton;
