import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

class Home extends Component {
  render() {
    return (
      <div className='home-container'>
        <h1>Github Battle: Battle Your Friends</h1>

        <Link className='button' to='/battle'>
          Battle
        </Link>
      </div>
    );
  }
}

export default Home;
