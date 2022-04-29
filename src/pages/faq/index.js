import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Layout from '../../components/layout';
import { QUESTIONS } from './questions';

const FAQ = () => {
  const [expanded, setExpanded] = useState(1);

  const handleChange = (id) => (_, newExpanded) => {
    setExpanded(newExpanded ? id : false);
  };

  return (
    <Layout>
      <div className="faq">
        <h2 className="faq--title"><span>Frequently</span> Asked Questions</h2>
        {
          QUESTIONS.map(({
            id,
            summary,
            details,
          }) => (
            <Accordion
              key={id}
              className="faq--accordion"
              expanded={expanded === id}
              onChange={handleChange(id)}
              sx={{ '&:before': { display: 'none' } }}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
                expandIcon={(expanded === id) ? <RemoveIcon /> : <AddIcon/>}
                sx={{ flexDirection: 'row-reverse' }}
              >
                <h4>{summary}</h4>
              </AccordionSummary>
              <AccordionDetails>
                <p>{details}</p>
              </AccordionDetails>
            </Accordion>
          ))
        }
      </div>
    </Layout>
  );
}

export default FAQ;
