import React from 'react';
import { NAV_ROUTES } from '../../utils/routes';

export const COSMOS_COLUMNS = {
  one: [
    {
      id: 1,
      title: 'Light The Fireside!',
      subTitle: 'LEARN ABOUT US',
      image: {
        src: '/images/cosmos/ufo-no-back.png',
        alt: 'Explore background image',
      },
      route: NAV_ROUTES.FIRESIDE,
    },
		{
      id: 2,
      title: 'Read The Lore!',
      subTitle: 'LEARN ABOUT US',
      image: {
        src: '/images/cosmos/fire.png',
        alt: 'Explore background image',
      },
      route: NAV_ROUTES.LORE,
    },
  ],
  two: [
		{
      id: 3,
      title: 'Meet The Team!',
      subTitle: 'LEARN ABOUT US',
      image: {
        src: '/images/cosmos/meet-the-team.png',
        alt: 'Explore background image',
      },
      route: NAV_ROUTES.TEAM,
    },
		{
      id: 4,
      title: 'FAQs',
      subTitle: 'LEARN ABOUT US',
      image: {
        src: '/images/pages-background/faq.png',
        alt: 'Explore background image',
      },
      route: NAV_ROUTES.FAQ,
    },
  ],
};
