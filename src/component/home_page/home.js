import React from 'react';
import './home.css';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className='home-container'>
      <div className='home'>
        <h1>Uassess</h1>
        <div className='home-btn-container'>
          <Link to='/login'><button className='home-btn'>Start test</button></Link>
        </div>
      </div> 
    </div>
  )
}

export default Home;
