import React from 'react';
import Layout from '../../components/layout';
import PageBGImg from '../../components/page-bg-img';
import MintInfoCenter from './info-center';
import MintFooter from './footer';
import backgroundImage from '../../../public/images/pages-background/mint.png';

// NOTE: context is for testing ONLY. Remove once endpoint/contract is connected.
import { useMintContext } from './context';

const Mint = () => {
  const { mintData: { role } } = useMintContext();

  return (
    <Layout>
      <div className="mint page-layout">
        <div className="mint--content">
          <h2>Welcome To The <span>{role} Pre-Sale</span></h2>
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
  )
};

export default Mint;
