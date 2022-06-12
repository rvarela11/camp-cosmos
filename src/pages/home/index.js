import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/shared/layout';
import ArrowCard from '../../components/arrow-card';
import { ROUTES } from '../../../src/utils/routes';
import homeImage from '../../../public/images/cc-logo-floating.png';

const Home = () => (
  <Layout>
    <div className="home page-layout">
      <div className="home--img">
        <Image
          src={homeImage}
          alt="Camp Cosmos home image"
          priority={true}
        />
      </div>
      <div className="home--card-container">
        <Link href={ROUTES.COSMOS}>
          <a>
            <ArrowCard className="home--card">
              <h6 className="home--card-title">ARE YOU READY?</h6>
              <h3 className="home--card-content">Follow me!</h3>
            </ArrowCard>
          </a>
        </Link>
      </div>
    </div>
  </Layout>
);

export default Home;