import React from 'react';

import frankieImage from '../../../public/images/team-members/frankie.png';
import galenImage from '../../../public/images/team-members/galen.png';
import johnImage from '../../../public/images/team-members/john.png';
import robImage from '../../../public/images/team-members/rob.png';
import winterImage from '../../../public/images/team-members/winter.jpeg'

export const TAB_LABELS = [
  {
    id: 0,
    label: <><span>Learn More</span>About Us</>
  },
  {
    id: 1,
    label: <><span>Visionary Artist</span>Alexandra 'Zutto'</>
  },
  {
    id: 2,
    label: <><span>Our Partner</span>WestCoast NFT</>
  },
  {
    id: 3,
    label: <><span>Camp Cosmos</span>Core Team</>
  },
];

export const CORE_MEMBERS = [
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    member: 'john',
    name: 'John Wingfield',
    position: 'Founder',
    social: {
      instagram: 'https://instagram.com/johnwingfield',
      twitter: 'https://twitter.com/johncwingfield',
    },
  },
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    member: 'frankie',
    name: 'Frankie',
    position: 'Brand Strategist',
    social: {
      instagram: 'https://instagram.com/frankiesutera',
      twitter: 'https://twitter.com/Frankie_Sutera',
    },
  },
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    member: 'eamon',
    name: 'Eamon',
    position: 'Social Media Coordinator',
    social: {
      twitter: 'https://twitter.com/eamonsphotoss',
    },
  },
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    member: 'tanqer',
    name: 'Tanqer',
    position: 'Business Development',
    social: {
      twitter: 'https://twitter.com/phives',
    },
  },
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    member: 'rob',
    name: 'Rob',
    position: 'Community Director',
    social: {
      instagram: 'https://instagram.com/rob_sese',
      twitter: 'https://twitter.com/rob_sese',
    },
  },
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    member: 'galen',
    name: 'Galen',
    position: 'Community Manager',
    social: {
      twitter: 'https://twitter.com/ga1enlott',
    },
  },
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    member: 'winter',
    name: 'Winter',
    position: 'Writer and Musician',
  },
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    member: 'james',
    name: 'James',
    position: 'Lead front-end dev',
  },
];

export const MEMBER_IMAGES = {
  default: johnImage,
  frankie: frankieImage,
  galen: galenImage,
  john: johnImage,
  rob: robImage,
  winter: winterImage,
};
