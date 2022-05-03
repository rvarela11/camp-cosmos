import React from 'react';
import Image from 'next/image';
import alexandraImage from '../../../../../public/images/camp-cosmos-alexandra.png';

const AlexandraTab = () => (
  <div className="alexandra-tab">
    <div className="alexandra-tab--description">
      <h2 className="alexandra-tab--description__title">Alexandra "Zutto"</h2>
      <div className="alexandra-tab--description__content">
        <p>"Zutto" is a highly acclaimed freelance illustrator based in Brooklyn, New York. Originally from a small town in central Russia, Alexandra has spent over a decade developing her unique style. She is completely self-taught, and over the last ten years, she's worked with high-profile brands such as Apple, The Washington Post, and more.</p>
        <p>Zutto uses vivid hues and hand-drawn, liquid textures to create enchanting and complex scenes. Zuttos world is a playground of the bright, colorful and surreal, drawing the viewer in to absorb its beautiful complexity.</p>
      </div>
      <div className="alexandra-tab--description__actions">
        <button type="button" className="alexandra-tab--description__action alexandra-tab--description__action--color">More about "Zutto"</button>
        <button type="button" className="alexandra-tab--description__action alexandra-tab--description__action--clear">Website</button>
      </div>
    </div>
    <div className="alexandra-tab--image">
      <Image
        src={alexandraImage}
        alt="Alexandra image"
        priority={true}
      />
    </div>
  </div>
);

export default AlexandraTab;
