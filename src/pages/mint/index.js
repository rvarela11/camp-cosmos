import React from 'react';
import Layout from '../../components/layout';
import PageBGImg from '../../components/page-bg-img';
import backgroundImage from '../../../public/images/pages-background/mint.png';
import { ROLES } from './constants';

const userRole = 'explorers';

const Mint = () => (
  <Layout>
    <div className="mint page-layout">      
      <div className="mint--content">
        <div className="mint--content-summary">
          <h2>Welcome To The <span>{ROLES[userRole]} Pre-Sale</span></h2>
          <p>Counter</p>
          <p>Button</p>
        </div>
        <footer>Footer</footer>
      </div>
    </div>
    <PageBGImg
      alt="Mint page background image"
      src={backgroundImage}
    />
  </Layout>
);

export default Mint;
