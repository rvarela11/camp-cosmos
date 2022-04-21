import React from 'react';
import { Twitter } from './icons/twitter';
import { Discord } from './icons/discord';
import { Instagram } from './icons/instagram';
import styles from './header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <img src='images/camp_cosmos_logo.svg' alt='Camp Cosmos' />
    </div>
    <div className={styles.nav}>
      <div className={styles.buttonGroup} aria-label="nav menu">
        <button type="button" className={styles.button}>THE GALAXY</button>
        <button type="button" className={styles.button}>FIRESIDE</button>
        <button type="button" className={styles.button}>SHOP</button>
      </div>
    </div>
    <div className={styles.socials}>
      <div className={styles.buttonGroup} aria-label="socials menu">
        <button type="button" className={styles.button}><Twitter /></button>
        <button type="button" className={styles.button}><Instagram /></button>
        <button type="button" className={styles.button}><Discord /></button>
      </div>
    </div>
  </header>
);

export default Header;
