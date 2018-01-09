import axios from 'axios';
import { ADD_PLAYER, RESET_PLAYER } from './types';

const url = process.env.REACT_APP_URL;
const clientId = process.env.REACT_APP_CLIENT_ID;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
const params = `?client_id=${clientId}&client_secret=${clientSecret}`;

const calculate = ({ followers, following, public_repos, public_gists }) =>
  (followers * 2) + (following * 0.5) + public_repos + public_gists


export const addPlayer = (player, username) => async dispatch => {
  const { data } = await axios.get(`${url}/users/${username}${params}`);
  const score = calculate(data);

  const newPlayer = {
    player,
    data: {
      name: data.name,
      avatar_url: data.avatar_url,
      followers: data.followers,
      following: data.following,
      public_repos: data.public_repos,
      public_gists: data.public_gists,
      username,
      score
    }
  };

  dispatch({ type: ADD_PLAYER, payload: newPlayer });
}

export const resetPlayer = player => dispatch => {
  dispatch({ type: RESET_PLAYER, payload: player });
}
