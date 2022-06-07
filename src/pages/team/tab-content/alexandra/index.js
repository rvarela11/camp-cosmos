import React from 'react';
import PageBGImg from '../../../../components/page-bg-img';
import { Twitter } from '../../../../components/header/icons/twitter';
import { Instagram } from '../../../../components/header/icons/instagram';
import backgroundImage from '../../../../../public/images/pages-background/zutto.png';

const AlexandraTab = () => (
  <>
    <div className="team--tabs-content page-layout">
     <h2>Alexandra "Zutto"</h2>
      <div className="team--tabs-content-summary">
        <p>"Zutto" is a highly acclaimed freelance illustrator based in Brooklyn, New York. Originally from a small town in central Russia, Alexandra has spent over a decade developing her unique style. She is completely self-taught, and over the last ten years, she's worked with high-profile brands such as Apple, The Washington Post, and more.</p>
        <p>Zutto uses vivid hues and hand-drawn, liquid textures to create enchanting and complex scenes. Zuttos world is a playground of the bright, colorful and surreal, drawing the viewer in to absorb its beautiful complexity.</p>
      </div>
      <div className="alexandra-tab--description-actions">
        <button type="button" className="alexandra-tab--description-actions-color">Behance</button>
        <button aria-label="Twitter icon button" className="alexandra-tab--description-actions-social" type="button"><Twitter /></button>
        <button aria-label="Instagram icon button" className="alexandra-tab--description-actions-social" type="button"><Instagram /></button>
      </div>
    </div>
    <PageBGImg
      alt="Alexandra page background image"
      className="page-bg-img--50"
      src={backgroundImage}
    />
  </>
);

export default AlexandraTab;
