import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Layout from '../../components/layout';
import Tabs from '../../components/tabs/mui';
import { QUESTIONS } from './questions';
import { TAB_LABELS } from './constants';
import { useWindowDimensions } from '../../utils/hooks';

const TabContent = {
  0: <p>0</p>,
  1: <p>1</p>,
  2: <p>2</p>,
  3: <p>3</p>,
};

const FAQ = () => {
  const [value, setValue] = useState(0);
  const { windowWidth } = useWindowDimensions();
  console.log({ value });
  return (
    <Layout>
      <div className="faq page-layout">
        <h2 className="faq--title"><span>You’ve Got Questions?</span>Pandora Has Answers:</h2>
        <Box className="faq--tabs-content">
          <Box>
            <h5 className="faq--tabs__title">FAQs</h5>
            {
              <Tabs orientation="vertical" setValue={setValue} value={value}>
                {
                  TAB_LABELS.map(({ id, label }) => (
                    <Tab
                      key={id}
                      className="faq--tabs__tab"
                      disableRipple
                      label={label}
                    />
                  ))
                }
              </Tabs>
            }
          </Box>
          <div>{TabContent[value]}</div>
        </Box>
      </div>
    </Layout>
  );
}

export default FAQ;
