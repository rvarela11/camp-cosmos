import React from 'react';
import PageBGImg from '../../../../components/shared/page-bg-img';
import backgroundImage from '../../../../../public/images/pages-background/lore.png';

const AboutTab = () => (
  <>
    <div className="team--tabs-content page-layout">
     <h2>Who We Are <span>& What We Do</span></h2>
      <div className="team--tabs-content-summary">
        <p>The Camp Cosmos team is made up of artists, investors, and visionaries across various fields of skill and expertise. We believe the future of the internet is decentralized, and we are committed to pushing the boundaries of web3.</p>
      </div>
    </div>
    <PageBGImg
      alt="About page background image"
      src={backgroundImage}
    />
  </>
);

export default AboutTab;
