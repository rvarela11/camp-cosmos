import React from 'react';
import PropTypes from 'prop-types';

const TabContent = ({ questions }) => (
  <div className="faq--content-tab">
    {
      questions.map(({ question, answer }, index) => (
        <div className="faq--content-tab-summary" key={index}>
          {question}
          {answer}
        </div>
      ))
    }
  </div>
);

TabContent.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
    question: PropTypes.node,
    answer: PropTypes.node,
  })
  ).isRequired,
};

export default TabContent;
