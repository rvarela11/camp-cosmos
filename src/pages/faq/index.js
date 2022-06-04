import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Layout from '../../components/layout';
import Tabs from '../../components/tabs/mui';
import TabContent from './tab-content';
import { FAQ_QUESTIONS, TAB_LABELS } from './constants';
import { useWindowDimensions } from '../../utils/hooks';
import backgroundImage from '../../../public/images/pages-background/faq.png';

const FAQ = () => {
  const [questions, setQuestions] = useState([]);
  const [value, setValue] = useState(0);
  const { windowWidth } = useWindowDimensions();
  console.log({ windowWidth });

  useEffect(() => {
    const current = FAQ_QUESTIONS.find(({ id }) => id === value) || {};
    setQuestions(current?.questions || []);
  }, [value]);

  return (
    <Layout>
      <div className="faq page-layout">
        <h2 className="faq--title"><span>You’ve Got Questions?</span>Pandora Has Answers:</h2>
        <Box className="faq--content">
          <Box>
            <h5 className="faq--content__tabs-title">FAQs</h5>
            {
              <Tabs orientation="vertical" setValue={setValue} value={value}>
                {
                  TAB_LABELS.map(({ id, label }) => (
                    <Tab
                      key={id}
                      className="faq--content__tabs-tab"
                      disableRipple
                      label={label}
                    />
                  ))
                }
              </Tabs>
            }
          </Box>
          <div className="faq--content__questions">
            <TabContent questions={questions} />
          </div>
        </Box>
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
