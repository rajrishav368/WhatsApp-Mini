import React from 'react';
import { Link } from 'react-router-dom';
import './features.css';

const Features = () => {
  return (
    <div className='hire__feature_main'>
      <div className='hire__feature_heading'>
        <h4>DON'T KNOW WHERE TO START?</h4>
      </div>
      <div className='hire__feature_heading2'>
        <h2>TRENDING SEARCHES</h2>
      </div>
      <div className='hire__feature_buttons'>
        <button type="button">React Developer</button>
        <button type="button">Data Analyst</button>
        <button type="button">C++ Developer</button>
        <button type="button">DevOps</button>
      </div>
      <div className='hire__feature_buttons'>
        <button type="button">Cybersecurity Expert</button>
        <button type="button">Angular Developer</button>
        <button type="button">AI/ML Engineer</button>
        <button type="button">Graphics Designer</button>
        <button type="button">Cloud Developer</button>
      </div>
      <div className='hire__feature_buttons'>
        <button type="button">Game Developer</button>
        <button type="button">NodeJS Developer</button>
        <button type="button">System Manager</button>
        <button type="button">SDE 2</button>
        <button type="button">Blockchain Developer</button>
        <button type="button">Engine Designer</button>
      </div>
      <div className='hire__feature_end'>
        <Link to="/signupWorkforce"><h4>View More Trending Searches</h4></Link>
      </div>
    </div>
  )
}

export default Features