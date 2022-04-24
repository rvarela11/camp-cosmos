import React from 'react';
import Link from 'next/link';
import { Twitter } from './icons/twitter';
import { Discord } from './icons/discord';
import { Instagram } from './icons/instagram';

const Header = () => (
  <header className="header">
    <div className="header--logo">
      <Link href="/">
        <img src="images/camp-cosmos-logo.svg" alt="Camp Cosmos logo" />
      </Link>
    </div>
    <div className="header--nav">
      <div className="h-button--group" aria-label="nav menu">
        <Link href="/galaxy">
          <button type="button" className="h-button">THE GALAXY</button>
        </Link>
        <Link href="/fireside">
          <button type="button" className="h-button">FIRESIDE</button>
        </Link>
        <Link href="/shop">
          <button type="button" className="h-button">SHOP</button>
        </Link>
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
