import React from 'react';
import Layout from '../../components/layout';
import PageBGImg from '../../components/page-bg-img';
import MintInfoCenter from './info-center';
import MintFooter from './footer';
import backgroundImage from '../../../public/images/pages-background/mint.png';
import { ROLES } from './constants';
// NOTE: MintContext is for testing ONLY. Remove once endpoint/contract is connected.
import { MintContext, MintContextProvider } from './context';

const userRole = 'explorers';

const Mint = () => (
  <MintContextProvider>
    <MintContext.Consumer>
    {({ metaMaskData: { address, status }, mintData }) => {
      return (
        <Layout>
          <div className="mint page-layout">
            <div className="mint--content">
              <div className="mint--content-summary">
                <h2>Welcome To The <span>{ROLES[userRole]} Pre-Sale</span></h2>
                <p>Total Supply</p>
                <MintInfoCenter address={address} status={status} />
              </div>
              <MintFooter address={address} status={status} />
            </div>
          </div>
          <PageBGImg
            alt="Mint page background image"
            src={backgroundImage}
          />
        </Layout>
      )
    }}
    </MintContext.Consumer>
  </MintContextProvider>
);

export default Mint;
