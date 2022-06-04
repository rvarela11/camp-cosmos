import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from './tabs';
import TabContent from './tab-content';
import { FAQ_QUESTIONS } from '../constants';

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
        <Tabs setValue={setValue} value={value} />
      </Box>
      <div className="faq--content__questions">
        <TabContent questions={questions} />
      </div>
    </Box>
  );
};

export default FAQContentDesktop;
