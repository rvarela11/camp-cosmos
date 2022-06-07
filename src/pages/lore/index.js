import React from 'react';
import Layout from '../../components/layout';
import PageBGImg from '../../components/page-bg-img';
import backgroundImage from '../../../public/images/camp-cosmos-lore.png';

const Lore = () => (
  <Layout>
    <div className="lore--content page-layout">
      <h2>Welcome to <span>Camp Cosmos</span></h2>
      <div className="lore--content-summary">
        <p>Camp Cosmos is a haven for the creatively gifted, altruistic, and philosophically curious of the universe, located on Planet Earth in the Milky Way Galaxy. Upon arrival, you’ll be joined by 9,999 other campers from across the cosmos who are eager to share all of the transcendental knowledge the universe has offered them, as well as stellar art and some pretty great music too.</p>
        <p>‍‍Camp Cosmos was founded in the year 2022 by Pandora Altair, an extraterrestrial anthropologist from deep in the Andromeda Galaxy. After being sent to Planet Earth on assignment and given strict orders not to intervene, Pandora fell in love with Earth’s culture and saw no option but to use her omnipresent knowledge to save the world from the impending climate crisis, even if it meant being exiled from her home planet.</p>
        <p>‍‍Camp Cosmos is Altair’s brainchild, serving as a constant reminder of the virtues and action necessary to sustain and nurture a healthy planet and treat all living things with the preciousness and dignity that they deserve.</p>
      </div>
    </div>
    <PageBGImg
      alt="Lore page background image"
      src={backgroundImage}
    />
  </Layout>
);

export default Lore;
