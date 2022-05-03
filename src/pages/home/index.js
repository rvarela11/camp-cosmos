import React from 'react';
import Link from 'next/link';
import Layout from '../../components/layout';
import ArrowCard from '../../components/arrow-card';
import { ROUTES } from '../../../src/utils/routes';

const Home = () => (
  <Layout>
    <div className="home page-layout">
      <div className="home--img">
        <img src="images/camp-cosmos-home.png" alt="Camp Cosmos home image" />
      </div>
      <div className="home--card-container">
        <Link href={ROUTES.COSMOS}>
          <a>
            <ArrowCard className="home--card">
              <h6 className="home--card__title">ARE YOU READY?</h6>
              <h3 className="home--card__content">Follow me!</h3>
            </ArrowCard>
          </a>
        </Link>
      </div>
    </div>
  </Layout>
);

export default Home;