import React, { useState } from 'react';
import Layout from '../../components/layout';
import { QUESTIONS } from './questions';
import { TAB_LABELS } from './constants';

const FAQ = () => {
  const [expanded, setExpanded] = useState(1);

  const handleChange = (id) => (_, newExpanded) => {
    setExpanded(newExpanded ? id : false);
  };

  return (
    <Layout>
      <div className="faq page-layout">
        <h2 className="faq--title"><span>You’ve Got Questions?</span>Pandora Has Answers:</h2>
      </div>
    </Layout>
  );
}

export default FAQ;
