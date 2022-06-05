import React from 'react';
import Image from 'next/image';
import backgroundImage from '../../../../../public/images/pages-background/west-coast.png';

const WestCoastTab = () => (
  <>
    <div className="team--tabs-content page-layout">
     <h2>WestCoastNFT</h2>
      <div className="team--tabs-content-summary">
        <p>We’re proud to partner with WestCoastNFT, the gold standard in Web3 development.</p>
        <p>Having consistently built a proven track record in the space, they are the team behind the successful launches of distinguished projects such as Doodles, MFers, Dour Darcels, and more; always providing smooth delivery, innovative mechanics, and secure mints.</p>
        <p>Pushing the boundaries of web3 is at the forefront of our mission and we hope to bring you along on our journey!</p>
      </div>
    </div>
    <div className="team-tab--background team-tab--background--60">
        <Image
          src={backgroundImage}
          alt="WestCoast page background image"
          priority={true}
        />
      </div>
  </>
);

export default WestCoastTab;
