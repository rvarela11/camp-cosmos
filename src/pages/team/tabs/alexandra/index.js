import React from 'react';

const AlexandraTab = () => (
  <div className="alexandra">
    <div className="alexandra--description">
      <h2 className="alexandra--description__title">Alexandra "Zutto"</h2>
      <div className="alexandra--description__content">
        <p>"Zutto" is a highly acclaimed freelance illustrator based in Brooklyn, New York. Originally from a small town in central Russia, Alexandra has spent over a decade developing her unique style. She is completely self-taught, and over the last ten years, she's worked with high-profile brands such as Apple, The Washington Post, and more.</p>
        <p>Zutto uses vivid hues and hand-drawn, liquid textures to create enchanting and complex scenes. Zuttos world is a playground of the bright, colorful and surreal, drawing the viewer in to absorb its beautiful complexity.</p>
      </div>
      <div className="alexandra--description__actions">
        <button type="button" className="alexandra--description__action alexandra--description__action--color">More about "Zutto"</button>
        <button type="button" className="alexandra--description__action alexandra--description__action--clear">Website</button>
      </div>
    </div>
    <div className="alexandra--image">
      <img className="alexandra--img" src="/images/camp-cosmos-alexandra.png" alt="Alexandra image" />
    </div>
  </div>
);

export default AlexandraTab;
