import { CardTravelSharp } from '@mui/icons-material';
import React from 'react';

const CosmosCard = () => (
  <div className='explore--container'>
    <div className='explore--item-container container--left'>
      {
        CardsLeft.map(({ id, title, image, detailTitle, paragraph1, paragraph2 }) => (
          <div key={id} className='explore--item'>
            <h6>LEARN ABOUT US</h6>
            <h3>{title}</h3>
            <button className='explore--arrow-container'>
              <div className='explore--arrow'></div>
            </button>
            <img className="explore--background" src={image} alt="Explore background image" />
            <div className='explore--details'>
              <div>
                <h3>
                  {detailTitle}
                </h3>
                <p>
                  {paragraph1}
                  <br /><br />            
                  {paragraph2}
                </p>
              </div>
              <button className='explore--arrow-container'>
                <div className='explore--arrow'></div>
              </button>
            </div>
          </div>
        )) 
      }
    </div>
    <div className='explore--item-container container--right'>
      {
        CardsRight.map(({ id, title, image, detailTitle, paragraph1, paragraph2 }) => (
          <div key={id} className='explore--item'>
            <h6>LEARN ABOUT US</h6>
            <h3>{title}</h3>
            <button className='explore--arrow-container'>
              <div className='explore--arrow'></div>
            </button>
            <img className="explore--background" src={image} alt="Explore background image" />
            <div className='explore--details'>
              <div>
                <h3>
                  {detailTitle}
                </h3>
                <p>
                  {paragraph1}
                  <br /><br />            
                  {paragraph2}
                </p>
              </div>
              <button className='explore--arrow-container'>
                <div className='explore--arrow'></div>
              </button>
            </div>
          </div>
        )) 
      }
    </div>
  </div>
);

export default CosmosCard;
