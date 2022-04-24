import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout';

const Home = () => (
  <Layout>
    <Head>
      <title>Camp Cosmos</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/images/camp-cosmos-logo.svg" />
    </Head>
    <div className="home">
      <div className="home--img">
        <img src="images/camp-cosmos-home.png" alt="Camp Cosmos home image" />
      </div>
    </div>
  </Layout>
);

export default Home;