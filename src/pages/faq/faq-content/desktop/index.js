import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from './tabs';
import TabContent from './tab-content';
import { FAQ_QUESTIONS } from '../constants';

const FAQDesktop = () => {
  const [questions, setQuestions] = useState([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const current = FAQ_QUESTIONS.find(({ id }) => id === value) || {};
    setQuestions(current?.questions || []);
  }, [value]);

  return (
    <Box className="faq--content">
      <Tabs setValue={setValue} value={value} />
      <TabContent questions={questions} />
    </Box>
  );
};

export default FAQDesktop;
