import React from 'react';
import Image from 'next/image';
import FAQContentDesktop from './faq-content/desktop';
import FAQContentMobile from './faq-content/mobile';
import Layout from '../../components/layout';
import { useWindowDimensions } from '../../utils/hooks';
import backgroundImage from '../../../public/images/pages-background/faq.png';

const FAQ = () => {
  const { windowWidth } = useWindowDimensions();

  return (
    <Layout>
      <div className="faq page-layout">
        <h2 className="faq--title"><span>You’ve Got Questions?</span>Pandora Has Answers:</h2>
        { (windowWidth <= 912) ? <FAQContentMobile /> : <FAQContentDesktop /> }
      </div>
      <div className="faq--background">
        <Image
          src={backgroundImage}
          alt="FAQ page background image"
          priority={true}
        />
      </div>
    </Layout>
  );
}

export default FAQ;
