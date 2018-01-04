import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import './index.css';

class PlayerPreview extends Component {
  reset() {
    this.props.resetPlayer(this.props.player);
  }

  render() {
    const { username, avatar } = this.props;

    return (
      <div>
        <div className='column'>
          <img
            className='avatar'
            src={avatar}
            alt={`Avatar for ${username}`}
          />
          <h2 className='username'>@{username}</h2>
        </div>
        <button
          className='reset'
          onClick={this.reset.bind(this)}
        >
          Reset
        </button>
      </div>
    );
  }
}

PlayerPreview.propTypes = {
  player: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
}

export default connect(null, actions)(PlayerPreview);
