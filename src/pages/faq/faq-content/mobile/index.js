import React, { Fragment } from 'react';
import { FAQ_QUESTIONS, TAB_LABELS } from '../constants';

const FAQMobile = () => (
  <div className="faq--content-mobile">
    <h5 className="faq--content-mobile-title">FAQs</h5>
    {
      TAB_LABELS.map(({ id, label }) => (
        <div key={id} className="faq--content-mobile-tab">
          <h5 className="faq--content-mobile-tab-label">{label}</h5>
          <div className="faq--content-mobile-tab-summary">
            {
              FAQ_QUESTIONS[id].questions.map(({ id, question, answer }, index) => (
                <Fragment key={`${label}_${id}_${index}`}>
                  {question}
                  {answer}
                </Fragment>
              ))
            }
          </div>
        </div>
      ))
    }
  </div>
)

export default FAQMobile;
