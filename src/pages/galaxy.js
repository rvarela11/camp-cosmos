import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../components/layout';

const GalaxyPage = () => (
  <Layout>
    <h1>
      <Link href='/'>
        <a>To Home page!</a>
      </Link>
    </h1>
    <div>
      <Image
        src='/images/profile.jpg'
        height={144}
        width={144}
        alt='Profile picture'
      />
    </div>
  </Layout>
);

export default GalaxyPage;
