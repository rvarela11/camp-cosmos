import React from 'react';
import Image from 'next/image';

import { Twitter } from '../../../../components/header/icons/twitter';
import { Instagram } from '../../../../components/header/icons/instagram';
// TODO: Replace loreImage with new Alexandra background image
// import alexandraImage from '../../../../../public/images/camp-cosmos-alexandra.png';
import loreImage from '../../../../../public/images/camp-cosmos-lore.png';

const AlexandraTab = () => (
  <div className="team-tab">
    <div className="team-tab--description page-layout">
     <h2 className="team-tab--description__title">Alexandra "Zutto"</h2>
      <div className="team-tab--description__content">
        <p>"Zutto" is a highly acclaimed freelance illustrator based in Brooklyn, New York. Originally from a small town in central Russia, Alexandra has spent over a decade developing her unique style. She is completely self-taught, and over the last ten years, she's worked with high-profile brands such as Apple, The Washington Post, and more.</p>
        <p>Zutto uses vivid hues and hand-drawn, liquid textures to create enchanting and complex scenes. Zuttos world is a playground of the bright, colorful and surreal, drawing the viewer in to absorb its beautiful complexity.</p>
      </div>
      <div className="alexandra-tab--description__actions">
        <button type="button" className="alexandra-tab--description__action alexandra-tab--description__action--color">Behance</button>
        <button aria-label="Twitter icon button" className="alexandra-tab--description__action alexandra-tab--description__action-social" type="button"><Twitter /></button>
        <button aria-label="Instagram icon button" className="alexandra-tab--description__action alexandra-tab--description__action-social" type="button"><Instagram /></button>
      </div>
    </div>
    <div className="team-tab--background">
      <Image
        src={loreImage}
        alt="Alexandra tab background image"
        layout="responsive"
        objectFit="cover"
        priority={true}
      />
    </div>
  </div>
);

export default AlexandraTab;
