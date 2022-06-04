import React from 'react';
import { FAQ_QUESTIONS, TAB_LABELS } from '../constants';

const FAQContentMobile = () => (
  <div className="faq--content-mobile">
    <h5 className="faq--content-mobile-title">FAQs</h5>
    {
      TAB_LABELS.map(({ id, label }) => (
        <div key={id} className="faq--content-mobile__questions">
          <h5 className="faq--content-mobile__questions-label">{label}</h5>
          {
            FAQ_QUESTIONS[id].questions.map(({ id, question, answer }, index) => (
              <div className="faq--content-mobile__questions-question" key={`${label}_${id}_${index}`}>
                {question}
                {answer}
              </div>
            ))
          }
        </div>
      ))
    }
  </div>
)

export default FAQContentMobile;
