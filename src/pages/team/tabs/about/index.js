import React from 'react';

const AboutTab = () => (
  <div className="about-tab">
    <div className="about-tab--description">
     <h2 className="about-tab--description__title">Who We Are <span>& What We Do</span></h2>
      <div className="about-tab--description__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
      </div>
    </div>
    <img className="about-tab--background" src="/images/camp-cosmos-lore.png" alt="About page background image" />
  </div>
);

export default AboutTab;
