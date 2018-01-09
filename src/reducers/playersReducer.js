import { ADD_PLAYER, RESET_PLAYER } from '../actions/types';
import initialState from '../data/initialState';

export default (state = null, action) => {
  switch(action.type) {
    case ADD_PLAYER:
      return {
        ...state,
        [action.payload.player]: {
          ...state[action.payload.player],
          ...action.payload.data
        }
      };
    case RESET_PLAYER:
      return {
        ...state,
        [action.payload]: {
          ...initialState.players[action.payload]
        }
      };
    default:
      return state;
  }
};
