import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { Twitter } from './icons/twitter';
import { Discord } from './icons/discord';
import { Instagram } from './icons/instagram';
import MobileNav from './mobile-nav';
import { NAV_ROUTES, ROUTES } from '../../../src/utils/routes';
import logoImage from '../../../public/images/cc-logo.svg';
import { SOCIAL_MEDIA_LINKS } from '../../utils/links';

const Header = () => {
  const { pathname } = useRouter();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="header--logo">
          <Link href={ROUTES.HOME}>
            <a>
              <Image
                src={logoImage}
                alt="Camp Cosmos logo"
                priority={true}
              />
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
            <a className="h-button" href={SOCIAL_MEDIA_LINKS.twitter}><Twitter /></a>
            <a className="h-button" href={SOCIAL_MEDIA_LINKS.instagram}><Instagram /></a>
            <a className="h-button" href={SOCIAL_MEDIA_LINKS.discord}><Discord /></a>
          </div>
        </div>
        <div className="header--menu">
          <button type="button" className="h-button" onClick={handleDrawerToggle}><DragHandleIcon /></button>
        </div>
      </header>
      <MobileNav isMobileMenuOpen={isMobileMenuOpen} handleDrawerToggle={handleDrawerToggle} />
    </>
  );
};

export default Header;
