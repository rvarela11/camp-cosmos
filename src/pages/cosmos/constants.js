import React from 'react';
import { NAV_ROUTES } from '../../utils/routes';

export const COSMOS_COLUMNS = {
  one: [
    {
      id: 1,
      title: 'Light The Fireside!',
      subTitle: 'LEARN ABOUT US',
      image: {
        src: '/images/cc-cosmos.png',
        alt: 'Explore background image',
      },
      secondaryTitle: 'Explore The Cosmos',
      description: (
      <>
        <p>"Zutto" is a highly acclaimed freelance illustrator based in Brooklyn, New York. Originally from a small town in central Russia, Alexandra has spent over a decade developing her unique style. She is completely self-taught, and over the last ten years, she's worked with high-profile brands such as Apple, The Washington Post, and more.</p>
        <p>Zutto uses vivid hues and hand-drawn, liquid textures complexity.</p>
      </>
      ),
      route: NAV_ROUTES.FIRESIDE,
    },
		{
      id: 2,
      title: 'Read The Lore!',
      subTitle: 'LEARN ABOUT US',
      image: {
        src: '/images/cc-cosmos.png',
        alt: 'Explore background image',
      },
      secondaryTitle: 'Explore The Cosmos',
      description: (
      <>
        <p>"Zutto" is a highly acclaimed freelance illustrator based in Brooklyn, New York. Originally from a small town in central Russia, Alexandra has spent over a decade developing her unique style. She is completely self-taught, and over the last ten years, she's worked with high-profile brands such as Apple, The Washington Post, and more.</p>
        <p>Zutto uses vivid hues and hand-drawn, liquid textures complexity.</p>
      </>
      ),
      route: NAV_ROUTES.LORE,
    },
  ],
  two: [
		{
      id: 3,
      title: 'Meet The Team!',
      subTitle: 'LEARN ABOUT US',
      image: {
        src: '/images/team-members/rob.png',
        alt: 'Explore background image',
      },
      secondaryTitle: 'Explore The Cosmos',
      description: (
      <>
        <p>"Zutto" is a highly acclaimed freelance illustrator based in Brooklyn, New York. Originally from a small town in central Russia, Alexandra has spent over a decade developing her unique style. She is completely self-taught, and over the last ten years, she's worked with high-profile brands such as Apple, The Washington Post, and more.</p>
        <p>Zutto uses vivid hues and hand-drawn, liquid textures complexity.</p>
      </>
      ),
      route: NAV_ROUTES.TEAM,
    },
		{
      id: 4,
      title: 'FAQs',
      subTitle: 'LEARN ABOUT US',
      image: {
        src: '/images/team-members/winter.jpeg',
        alt: 'Explore background image',
      },
      secondaryTitle: 'Explore The Cosmos',
      description: (
      <>
        <p>"Zutto" is a highly acclaimed freelance illustrator based in Brooklyn, New York. Originally from a small town in central Russia, Alexandra has spent over a decade developing her unique style. She is completely self-taught, and over the last ten years, she's worked with high-profile brands such as Apple, The Washington Post, and more.</p>
        <p>Zutto uses vivid hues and hand-drawn, liquid textures complexity.</p>
      </>
      ),
      route: NAV_ROUTES.FAQ,
    },
  ],
};
