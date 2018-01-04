import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

class PlayerInput extends Component {
  constructor(props) {
    super(props);

    this.state = { username: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const username = event.target.value;

    this.setState({ username });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { id, onSubmit } = this.props;
    const username = this.state.username;

    onSubmit(id, username);
  }

  render() {
    return (
      <form className='column' onSubmit={this.handleSubmit}>
        <label htmlFor='username'>{this.props.label}</label>
        <input
          id='username'
          placeholder='github username'
          type='text'
          autoComplete='off'
          value={this.state.username}
          onChange={this.handleChange}
        />
        <button
          className='button'
          type='submit'
          disabled={!this.state.username}
        >
          Submit
        </button>
      </form>
    )
  }
}

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default PlayerInput;
