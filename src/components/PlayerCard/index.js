import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const PlayerCard = props =>
  <div className='column'>
    <h1 className='center'>{props.heading}</h1>
    <img
      className='avatar'
      src={props.avatar}
      alt={`Avatar for ${props.username}`}
    />
    <h2 className='username'>@{props.username}</h2>
    {props.children}
  </div>

PlayerCard.propTypes = {
  username: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
}

export default PlayerCard;
