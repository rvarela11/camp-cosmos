import React from 'react';

const Arrow = ({ className = "" }) => (
  <button className={`${className} arrow-container`}>
    <div className='arrow'></div>
  </button>
);

export default Arrow;
