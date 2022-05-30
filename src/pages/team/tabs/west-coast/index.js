import React from 'react';
import Image from 'next/image';
// TODO: Replace loreImage with new WestCoast background image
import loreImage from '../../../../../public/images/camp-cosmos-lore.png';

const WestCoastTab = () => (
  <div className="team-tab">
    <div className="team-tab--description page-layout">
     <h2 className="team-tab--description__title">WestCoastNFT</h2>
      <div className="team-tab--description__content">
        <p>We’re proud to partner with WestCoastNFT, the gold standard in Web3 development.</p>
        <p>Having consistently built a proven track record in the space, they are the team behind the successful launches of distinguished projects such as Doodles, MFers, Dour Darcels, and more; always providing smooth delivery, innovative mechanics, and secure mints.</p>
        <p>Pushing the boundaries of web3 is at the forefront of our mission and we hope to bring you along on our journey!</p>
      </div>
    </div>
    <div className="team-tab--background">
        <Image
          src={loreImage}
          alt="About page background image"
          layout="responsive"
          objectFit="cover"
          priority={true}
        />
      </div>
  </div>
);

export default WestCoastTab;
