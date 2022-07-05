import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import TeamCardFront from './team-card-front';
import TeamCardBack from './team-card-back';

const TeamTab = ({ members, title }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (index) => (_, newExpanded) => {
    setExpanded(newExpanded ? index : false);
  };

  return (
    <>
      <h2 className="team-tab-title">{title}</h2>
      <div className="team-tab-grid">
        {
          members.map((props, index) => (
            <div key={index} className="team-tab-grid-card">
              <TeamCardFront {...props} />
              <TeamCardBack {...props} />
              <Accordion
                key={index}
                className="team-tab-grid-card-about"
                expanded={expanded === index}
                onChange={handleChange(index)}
                sx={{ '&:before': { display: 'none' } }}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                  expandIcon={(expanded === index) ? <RemoveIcon /> : <AddIcon/>}
                  sx={{ flexDirection: 'row-reverse' }}
                >
                  <p>About</p>
                </AccordionSummary>
                <AccordionDetails>{props.description}</AccordionDetails>
              </Accordion>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default TeamTab;
