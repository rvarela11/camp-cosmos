import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { Twitter } from './icons/twitter';
import { Discord } from './icons/discord';
import { Instagram } from './icons/instagram';
import { NAV_ROUTES, ROUTES } from '../../../src/utils/routes';

const Header = () => {
  const { pathname } = useRouter();

  return (
    <header className="header">
      <div className="header--logo">
        <Link href={ROUTES.HOME}>
          <img src="images/camp_cosmos_logo.svg" alt="Camp Cosmos" />
        </Link>
      </div>
      <div className={classNames("header--nav", { ["header--nav-hide"]: pathname === ROUTES.HOME })}>
        <div className="h-button--group" aria-label="nav menu">
          {
            Object.entries(NAV_ROUTES).map(([label, route]) => (
              <Link href={route}>
                <button
                  type="button"
                  className={classNames("h-button", { ["h-button-selected"]: pathname === route })}
                >
                  <span>{label}</span>
                </button>
              </Link>
            ))
          }
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
};

export default Header;
