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
    description: (
      <>
        <p>Freelance photographer, Copywriter, Social Media Marketer, very serious person</p>
        <p>Brand partnerships: REI, Adobe, GMC, Columbia, Nikon, Anheuser-Busch, Coleman, Jeep</p>
      </>
    ),
    member: 'john',
    name: 'John Wingfield',
    position: 'Founder',
    social: {
      instagram: 'https://instagram.com/johnwingfield',
      twitter: 'https://twitter.com/johncwingfield',
    },
  },
  {
    description: (
      <>
        <p>NFT Analyst, Photographer, Project manager</p>
        <p>Athlete and Chief Vibes Officer</p>
      </>
    ),
    member: 'frankie',
    name: 'Frankie',
    position: 'Brand Strategist',
    social: {
      instagram: 'https://instagram.com/frankiesutera',
      twitter: 'https://twitter.com/Frankie_Sutera',
    },
  },
  {
    description: <p>Photographer, tour guide, lifeguard</p>,
    member: 'eamon',
    name: 'Eamon',
    position: 'Social Media Coordinator',
    social: {
      twitter: 'https://twitter.com/eamonsphotoss',
    },
  },
  {
    description: (
      <>
        <p>Marketing veteran, Event Coordinator, Producer, rugged 1x by fake Doodles</p>
        <p>Sony Alpha Global, System 9, Shedd Aquarium, FCB (Miller-Coors, Yum! Brands, Boeing)</p>
      </>
    ),
    member: 'tanqer',
    name: 'Tanqer',
    position: 'Business Development',
    social: {
      twitter: 'https://twitter.com/phives',
    },
  },
  {
    description: (
      <>
        <p>Commercial photographer, wannabe stock trader</p>
        <p>Brand Partnerships: Land Rover, GMC, LG, Canon, BMW, Chicago Bulls, Alaska Airlines, Amazon, Adidas</p>
      </>
    ),
    member: 'rob',
    name: 'Rob',
    position: 'Community Director',
    social: {
      instagram: 'https://instagram.com/rob_sese',
      twitter: 'https://twitter.com/rob_sese',
    },
  },
  {
    description: <p>Photographer, tour guide, high school graduate</p>,
    member: 'galen',
    name: 'Galen',
    position: 'Community Manager',
    social: {
      twitter: 'https://twitter.com/ga1enlott',
    },
  },
  {
    description: <p>Writer and Musician</p>,
    member: 'winter',
    name: 'Winter',
    position: 'Writer and Musician',
  },
  {
    description: <p>NFT analyst, Community lead for Fewoworld</p>,
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
