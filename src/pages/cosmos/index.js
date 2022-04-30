import React from 'react';
import Layout from '../../components/layout';

const Cosmos = () => (
  <Layout>
    <div className='explore--container'>
      <div className='explore--item-container container--left'>
        <div className='explore--item'>
          <h6>LEARN ABOUT US</h6>
          <h3>Light The Fireside!</h3>
          <button className='explore--arrow-container'>
            <div className='explore--arrow'></div>
          </button>
          <img className="explore--background" src="/images/camp-cosmos-cosmos.png" alt="Explore background image" />
          <div className='explore--details'>
            <div>
              <h3>
                Explore The Cosmos
              </h3>
              <p>
                "Zutto" is a highly acclaimed freelance illustrator based in Brooklyn, New York. Originally from a small town in central Russia, Alexandra has spent over a decade developing her unique style. She is completely self-taught, and over the last ten years, she's worked with high-profile brands such as Apple, The Washington Post, and more.
                <br /><br />            
                Zutto uses vivid hues and hand-drawn, liquid textures complexity.
              </p>
            </div>
            <button className='explore--arrow-container'>
              <div className='explore--arrow'></div>
            </button>
          </div>
        </div>
        <div className='explore--item'>
          <h6>LEARN ABOUT US</h6>
          <h3>Read The Lore!</h3>
          <button className='explore--arrow-container'>
            <div className='explore--arrow'></div>
          </button>
          <img className="explore--background" src="/images/camp-cosmos-cosmos.png" alt="Explore background image" />
        </div>
      </div>
      <div className='explore--item-container container--right'>
        <div className='explore--item'>
          <h6>LEARN ABOUT US</h6>
          <h3>Meet The Team!</h3>
          <button className='explore--arrow-container'>
            <div className='explore--arrow'></div>
          </button>
          <img className="explore--background" src="/images/team-members/rob.png" alt="Explore background image" />
        </div>
        <div className='explore--item'>
          <h6>LEARN ABOUT US</h6>
          <h3>FAQs</h3>
          <button className='explore--arrow-container'>
            <div className='explore--arrow'></div>
          </button>
          <img className="explore--background" src="/images/team-members/Winter.jpeg" alt="Explore background image" />
        </div>
      </div>
    </div>
  </Layout>
);

export default Cosmos;
