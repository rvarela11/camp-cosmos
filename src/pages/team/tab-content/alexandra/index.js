import React from 'react';
import { Twitter } from '../../../../components/header/icons/twitter';
import { Instagram } from '../../../../components/header/icons/instagram';
import PageBGImg from '../../../../components/shared/page-bg-img';
import TearDropButton from '../../../../components/shared/teardrop-button';
import backgroundImage from '../../../../../public/images/pages-background/zutto.png';
import { ZUTTO_LINKS } from '../../../../utils/links';

const AlexandraTab = () => (
  <>
    <div className="team--tabs-content page-layout">
     <h2>Alexandra "Zutto"</h2>
      <div className="team--tabs-content-summary">
        <p>Alexandra, mostly known as "Zutto", is a highly acclaimed freelance illustrator based in Brooklyn, New York. Originally from a small town in central Russia, Alexandra has spent over a decade developing her unique style. She is completely self-taught and has been working full-time as an artist for many years, having worked with notable brands such as Adobe, Figma, the Olympics, Apple, Nike, NASA, and Cartoon Network just to name a few. Zutto uses vivid hues and hand-drawn, liquid textures to create enchanting and complex scenes. Zuttos world is a playground of the bright, colorful and surreal, drawing the viewer in to absorb its beautiful complexity.</p>
      </div>
      <div className="alexandra-tab--description-actions">
        <a href={ZUTTO_LINKS.behance}>
          <TearDropButton ariaLabel="Behance button" className="alexandra-tab--description-actions-color">Behance</TearDropButton>
        </a>
        <a href={ZUTTO_LINKS.twitter}>
          <TearDropButton ariaLabel="Twitter icon button" className="alexandra-tab--description-actions-social"><Twitter /></TearDropButton>
        </a>
        <a href={ZUTTO_LINKS.instagram}>
          <TearDropButton ariaLabel="Instagram icon button" className="alexandra-tab--description-actions-social"><Instagram /></TearDropButton>
        </a>
      </div>
    </div>
    <PageBGImg
      alt="Alexandra page background image"
      className="page-bg-img--60"
      src={backgroundImage}
    />
  </>
);

export default AlexandraTab;
