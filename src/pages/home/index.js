import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import ArrowCard from '../../components/arrow-card';
import { ROUTES } from '../../../src/utils/routes';

const Home = () => (
  <Layout>
    <Head>
      <meta charset="utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta property="og:site_name" content="Camp Cosmos" />
      <meta property="og:url" content="https://www.campcosmos.io" />
      <meta property="og:title" content="Camp Cosmos" />
      <meta property="og:image" content="/images/camp-cosmos-logo.svg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content="website" />
      <meta name="description" content="Camp Cosmos" />
      <title>Camp Cosmos</title>
      <link rel="icon" type="image/x-icon" href="/images/camp-cosmos-logo.svg" />

    </Head>
    <div className="home">
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