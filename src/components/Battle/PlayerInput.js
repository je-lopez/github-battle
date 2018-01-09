import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import './index.css';

class PlayerInput extends Component {
  handleSubmit(event) {
    event.preventDefault();
    this.props.addPlayer(this.props.player, event.target.username.value);
  }

  render() {
    return (
      <form className='column' onSubmit={this.handleSubmit.bind(this)}>
        <label htmlFor='username'>{this.props.label}</label>
        <input
          id='username'
          name='username'
          placeholder='github username'
          type='text'
          autoComplete='off'
        />
        <button
          className='button'
          type='submit'
        >
          Submit
        </button>
      </form>
    );
  }
}

PlayerInput.propTypes = {
  player: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default connect(null, actions)(PlayerInput);
