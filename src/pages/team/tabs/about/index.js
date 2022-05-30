import React from 'react';
import Image from 'next/image';
import loreImage from '../../../../../public/images/camp-cosmos-lore.png';

const AboutTab = () => (
  <div className="about-tab">
    <div className="about-tab--description page-layout">
     <h2 className="about-tab--description__title">Who We Are <span>& What We Do</span></h2>
      <div className="about-tab--description__content">
        <p>The Camp Cosmos team is made up of artists, investors, and visionaries across various fields of skill and expertise. We believe the future of the internet is decentralized, and we are committed to pushing the boundaries of web3.</p>
      </div>
    </div>
    <div className="about-tab--background">
        <Image
          src={loreImage}
          alt="About page background image"
          layout="responsive"
          objectFit="cover"
          priority={true}
        />
      </div>
  </div>
);

export default AboutTab;
