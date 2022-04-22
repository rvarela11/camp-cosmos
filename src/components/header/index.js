import React from 'react';
import { Twitter } from './icons/twitter';
import { Discord } from './icons/discord';
import { Instagram } from './icons/instagram';

const Header = () => (
  <header className="header">
    <div className="header--logo">
      <img src='images/camp_cosmos_logo.svg' alt='Camp Cosmos' />
    </div>
    <div className="header--nav">
      <div className="h-button--group" aria-label="nav menu">
        <button type="button" className="h-button">THE GALAXY</button>
        <button type="button" className="h-button">FIRESIDE</button>
        <button type="button" className="h-button">SHOP</button>
      </div>
    </div>
    <div className="header--socials">
      <div className="h-button--group" aria-label="socials menu">
        <button type="button" className="h-button"><Twitter /></button>
        <button type="button" className="h-button"><Instagram /></button>
        <button type="button" className="h-button"><Discord /></button>
      </div>
    </div>
  </header>
);

export default Header;
