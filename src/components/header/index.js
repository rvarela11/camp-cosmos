import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { Twitter } from './icons/twitter';
import { Discord } from './icons/discord';
import { Instagram } from './icons/instagram';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { NAV_ROUTES, ROUTES } from '../../../src/utils/routes';

const Header = () => {
  const { pathname } = useRouter();

  return (
    <header className="header">
      <div className="header--logo">
        <Link href={ROUTES.HOME}>
          <a>
            <img src="images/camp-cosmos-logo.svg" alt="Camp Cosmos" />
          </a>
        </Link>
      </div>
      <div className={classNames("header--nav", { ["header--nav-hide"]: pathname === ROUTES.HOME })}>
        <div className="h-button--group" aria-label="nav menu">
          {
            Object.entries(NAV_ROUTES).map(([label, route]) => (
              <Link key={route} href={route}>
                <a>
                  <button
                    type="button"
                    className={classNames("h-button", { ["h-button-selected"]: pathname === route })}
                  >
                    <span>{label}</span>
                  </button>
                </a>
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
      <div className="header--menu">
        <button type="button" className="h-button"><DragHandleIcon /></button>
      </div>
    </header>
  );
};

export default Header;
