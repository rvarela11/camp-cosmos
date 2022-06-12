import React from 'react';
import Header from '../../header';
import SEO from '../../SEO';

const Layout = ({ children }) => (
  <>
    <SEO />
    <Header />
    {children}
  </>
);

export default Layout;
