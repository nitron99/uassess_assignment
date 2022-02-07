import React from 'react';
import './result.css';
import {Link} from 'react-router-dom';

function Result({totalques, correct, incorrect}) {
  return (
    <div className='result-container'>
      <div className='result'>
      Total Question - {totalques}<br/>
      Correct - {correct}<br/>
      Incorrect - {incorrect}<br/>
      </div>
    </div>
  )
}

export default Result;
