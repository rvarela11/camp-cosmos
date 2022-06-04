import React from 'react';

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
)

export default FAQTab;
