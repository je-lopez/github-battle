import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';

import PlayerInput from './PlayerInput';
import PlayerCard from '../PlayerCard';

const Battle = props => {
  const { players, match, resetPlayer } = props;
  const positions = ['playerOne', 'playerTwo'];

  return [
    <div key='players' className='row'>
      {Object.keys(players).map((player, i) => {
        const { username, avatar_url, label, name } = players[player];

        return !avatar_url ?
          <PlayerInput
            key={i}
            player={positions[i]}
            label={label}
          /> :
          <PlayerCard
            key={i}
            avatar={avatar_url}
            username={username}
            heading={name}
          >
            <button
              className='reset'
              onClick={() => resetPlayer(positions[i])}
            >
              Reset
            </button>
          </PlayerCard>
      })}
    </div>,

    players.playerOne.score && players.playerTwo.score &&
      <Link
        key='battle'
        className='button'
        to={{ pathname: `${match.url}/results` }}
      >
        Battle
      </Link>
  ];
}

function mapStateToProps({ players }) {
  return { players }
}

export default connect(mapStateToProps, actions)(Battle);
