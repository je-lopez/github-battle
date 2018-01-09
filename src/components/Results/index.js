import React, { Component } from 'react';
import { connect } from 'react-redux';

import PlayerCard from '../PlayerCard';
import './index.css';

class Results extends Component {
  render() {
    const { players } = this.props;
    const winner = Math.max(players.playerOne.score, players.playerTwo.score);

    return (
      <div className='row'>
        {[players.playerOne, players.playerTwo].map(player =>
          <div key={player.username}>
            <PlayerCard
              username={player.username}
              heading={player.score === winner ? 'Winner' : 'Loser'}
              avatar={player.avatar_url}
            />

            <ul className='space-list-items'>
              <li><strong>{player.name}</strong></li>
              <li>Followers: {player.followers}</li>
              <li>Following: {player.following}</li>
              <li>Public Repos: {player.public_repos}</li>
              <li>Public Gists: {player.public_gists}</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ players }) {
  return { players }
}

export default connect(mapStateToProps)(Results);
