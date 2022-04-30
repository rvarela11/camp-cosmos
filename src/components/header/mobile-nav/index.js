import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {
  IconButton,
  Box,
  Drawer,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Twitter } from '../icons/twitter';
import { Discord } from '../icons/discord';
import { Instagram } from '../icons/instagram';
import { NAV_ROUTES, ROUTES } from '../../../utils/routes';

const MobileNav = ({ handleDrawerToggle, isMobileMenuOpen }) => (
  <Box component="nav">
    <Drawer
      anchor="right"
      className="mobile-nav"
      open={isMobileMenuOpen}
      variant="temporary"
      ModalProps={{ keepMounted: true }}
    >
      <div className="mobile-nav__close">
        <Link href={ROUTES.HOME}>
         <a><img src="images/camp-cosmos-logo.svg" alt="Camp Cosmos" /></a>
        </Link>
        <IconButton
          aria-label="open menu"
          color="inherit"
          edge="start"
          onClick={handleDrawerToggle}
        >
          <CloseIcon />
        </IconButton>
      </div>
      <div className="mobile-nav__nav">
        {
          Object.entries(NAV_ROUTES).map(([label, route]) => (
            <Link key={route} href={route}>
              <a><button aria-label={`${label} button`} className="mobile-nav__nav-button" type="button" >{label}</button></a>
            </Link>
          ))
        }
        <button aria-label="Twitter icon button" className="mobile-nav__nav-button" type="button">Twitter <Twitter /></button>
        <button aria-label="Instagram icon button" className="mobile-nav__nav-button" type="button">Instagram <Instagram /></button>
        <button aria-label="Discord icon button" className="mobile-nav__nav-button" type="button">Discord <Discord /></button>
      </div>
    </Drawer>
  </Box>
);

MobileNav.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired,
  isMobileMenuOpen: PropTypes.bool.isRequired,
};

export default MobileNav;
