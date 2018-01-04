import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PlayerPreview from './PlayerPreview';
import PlayerInput from './PlayerInput';

class Battle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleSubmit(id, username) {
    this.setState(() => {
      const newState = {};

      newState[id + 'Name'] = username;
      newState[id + 'Image'] = `https://github.com/${username}.png?size=200`;

      return newState;
    });
  }

  handleReset(id) {
    this.setState(() => {
      const newState = {};

      newState[id + 'Name'] = '';
      newState[id + 'Image'] = null;

      return newState;
    });
  }

  render() {
    const match = this.props.match;
    const { playerOneName, playerTwoName } = this.state;
    const { playerOneImage, playerTwoImage } = this.state;

    return (
      <div>
        <div className='row'>
          {!playerOneName ?
            <PlayerInput
              id='playerOne'
              label='Player One'
              onSubmit={this.handleSubmit}
            /> :
            <PlayerPreview
              avatar={playerOneImage}
              username={playerOneName}
              id='playerOne'
              onReset={this.handleReset}
           />}

          {!playerTwoName ?
            <PlayerInput
              id='playerTwo'
              label='Player Two'
              onSubmit={this.handleSubmit}
            /> :
            <PlayerPreview
              avatar={playerTwoImage}
              username={playerTwoName}
              id='playerTwo'
              onReset={this.handleReset}
            />}
        </div>

        {playerOneImage && playerTwoImage &&
          <Link
            className='button'
            to={{
              pathname: `${match.url}/results`,
              search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`
            }}
          >
            Battle
          </Link>
        }
      </div>
    )
  }
}

export default Battle;
