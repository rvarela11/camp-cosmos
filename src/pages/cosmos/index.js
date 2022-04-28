import React from 'react';
import Layout from '../../components/layout';

const Cosmos = () => (
  <Layout>
    <h2 className='explore--title'>Welcome To The Cosmos!</h2>
    <div className='explore--container'>
      <div className='explore--item-container'>
        <div className='explore--item'>
          <h6>LEARN ABOUT US</h6>
          <h3>Light The Fireside!</h3>
          <button className='explore--arrow-container'>
            <div className='explore--arrow'></div>
          </button>
        </div>
        <div className='explore--item'>
          <div className='sliding long-arrow-right'></div>
        </div>
      </div>
      <div className='explore--item-container'>
        <div className='explore--item'>
          <div className='sliding long-arrow-right'></div>
        </div>
        <div className='explore--item'>
          <div className='sliding long-arrow-right'></div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Cosmos;
