import React from 'react';
import Image from 'next/image';
import loreImage from '../../../../../public/images/camp-cosmos-lore.png';

const AboutTab = () => (
  <div className="about-tab">
    <div className="about-tab--description page-layout">
     <h2 className="about-tab--description__title">Who We Are <span>& What We Do</span></h2>
      <div className="about-tab--description__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
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
