import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '../../../../components/tabs/mui';
import TabContent from './tab-content';
import { FAQ_QUESTIONS, TAB_LABELS } from '../constants';

const FAQContentDesktop = () => {
  const [questions, setQuestions] = useState([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const current = FAQ_QUESTIONS.find(({ id }) => id === value) || {};
    setQuestions(current?.questions || []);
  }, [value]);

  return (
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
  );
};

export default FAQContentDesktop;
