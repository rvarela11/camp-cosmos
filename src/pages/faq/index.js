import React from 'react';
import FAQDesktop from './faq-content/desktop';
import FAQMobile from './faq-content/mobile';
import Layout from '../../components/shared/layout';
import PageBGImg from '../../components/shared/page-bg-img';
import { useWindowDimensions } from '../../utils/hooks';
import backgroundImage from '../../../public/images/pages-background/faq.png';

const FAQ = () => {
  const { windowWidth } = useWindowDimensions();

  return (
    <Layout>
      <div className="faq page-layout">
        <h2 className="faq--title"><span>You’ve Got Questions?</span>Pandora Has Answers:</h2>
        { (windowWidth <= 912) ? <FAQMobile /> : <FAQDesktop /> }
      </div>
      <PageBGImg
        alt="FAQ page background image"
        className="page-bg-img--55"
        src={backgroundImage}
      />
    </Layout>
  );
}

export default FAQ;
