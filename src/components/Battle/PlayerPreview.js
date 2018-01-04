import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const PlayerPreview = (props) =>
  <div>
    <div className='column'>
      <img
        className='avatar'
        src={props.avatar}
        alt={`Avatar for ${props.username}`}
      />
      <h2 className='username'>@{props.username}</h2>
    </div>
    <button
      className='reset'
      onClick={props.onReset.bind(null, props.id)}
    >
      Reset
    </button>
  </div>

PlayerPreview.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired
}

export default PlayerPreview;