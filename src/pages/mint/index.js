import React from 'react';
import Layout from '../../components/layout';
import PageBGImg from '../../components/page-bg-img';
import MintInfoCenter from './info-center';
import MintMessageCenter from './message-center';
import MintFooter from './footer';
import backgroundImage from '../../../public/images/pages-background/mint.png';

const Mint = () => (
  <Layout>
    <div className="mint page-layout">
      <div className="mint--content">
        <MintMessageCenter />
        <div className="mint--content-summary">
          <p>Total Supply</p>
          <MintInfoCenter />
        </div>
      </div>
      <MintFooter />
    </div>
    <PageBGImg
      alt="Mint page background image"
      className="page-bg-img--70"
      src={backgroundImage}
    />
  </Layout>
);

export default Mint;
