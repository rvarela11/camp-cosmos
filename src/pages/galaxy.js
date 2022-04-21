import React from 'react';
import Layout from '../components/layout';
import styles from '../styles/galaxy.module.scss';

const GalaxyPage = () => (
  <Layout>
    <div className={styles['galaxy--background']} />
    <div className={styles['galaxy--description']}>
      <h2 className={styles['galaxy--description__title']}>Welcome to Camp Cosmos</h2>
    </div>
  </Layout>
);

export default GalaxyPage;
