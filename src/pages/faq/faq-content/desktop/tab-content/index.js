import React from 'react';
import PropTypes from 'prop-types';

const FAQTab = ({ questions }) => (
  <>
    {
      questions.map(({ question, answer }, index) => (
        <div className="faq--content__questions-question" key={index}>
          {question}
          {answer}
        </div>
      ))
    }
  </>
);

FAQTab.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
    question: PropTypes.node,
    answer: PropTypes.node,
  })
  ).isRequired,
};

export default FAQTab;
