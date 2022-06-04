import React from 'react';

export const TAB_LABELS = [
  {
    id: 0,
    label: 'GENERAL INFO'
  },
  {
    id: 1,
    label: 'HOW DO I GET ON THE CAMP LIST?'
  },
  {
    id: 2,
    label: 'ROADMAP'
  },
  {
    id: 3,
    label: 'LORE'
  },
];

export const FAQ_QUESTIONS = [
  {
    id: 0,
    questions: [
      {
        question: <h6>What is the total supply?</h6>,
        answer: <p>Camp Cosmos will consist of 10,000 ERC-721 tokens.</p>,
      },
      {
        question: <h6>How many CampList spots will there be?</h6>,
        answer: <p>We are still determining how many CampList spots will exist, details coming soon!</p>,
      },
      {
        question: <h6>Wen mint?</h6>,
        answer: <p>We are planning our mint for late May or early June. It's important to us that we mint according to market conditions, community sentiment and other factors, which is why we have a floating mint date that will be determined in the near future.</p>,
      },
      {
        question: <h6>What is the mint price per Camper?</h6>,
        answer: <p>Each Camper will cost .111Ξ</p>,
      },
      {
        question: <h6>What type of contract will you be using?</h6>,
        answer: <p>We will be using the ERC-721A Contract</p>,
      },
    ]
  },
  {
    id: 1,
    questions: [
      {
        answer: <p>The best way to receive a CampList spot is to become an active and positive member of Camp Cosmos! You can do this by joining and engaging with our Discord community, participating in various challenges and activations throughout our Discord server, or by entering giveaways on Twitter!</p>,
      },
    ]
  },
  {
    id: 2,
    questions: [
      {
        answer: (
          <>
            <p>Over the last few months, we’ve been hard at work developing an exciting future for Camp Cosmos. We can’t release too many details yet, but we can say that we are committed to bringing value to our community of holders, through a variety of future executions both in web3 and IRL.</p>
            <p>Our team is committed to building and innovating in web3 alongside our partners at West Coast NFT, and we understand the importance of being able to pivot as the space grows and changes. Our values, ethics, and vision for the brand will be key in determining how we move forward after launch. </p>
            <p>We're excited to share more details very soon!</p>
          </>
        ),
      },
    ]
  },
  {
    id: 3,
    questions: [
      {
        answer: <p>We have hired a talented writer and musician to assist us with developing the Storytelling behind Camp Cosmos. Lore will be the backbone of the Camp Cosmos brand, and we're so excited to share it with you all!</p>,
      },
    ]
  },
];
