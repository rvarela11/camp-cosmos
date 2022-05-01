import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Layout from '../../components/layout';
import { COSMOS_COLUMNS } from './constants';

const Cosmos = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (id) => (_, newExpanded) => {
    setExpanded(newExpanded ? id : false);
  };

  return (
    <Layout>
      <div className='explore--container'>
        {
          Object.keys(COSMOS_COLUMNS).map((column) => {
            return (
              <div key={`container--${column}`} className={`explore--item-container container--${column}`}>
                {
                  COSMOS_COLUMNS[column].map(({
                    id,
                    title,
                    subTitle,
                    image,
                    secondaryTitle,
                    description
                  }, index) => (
                    <>
                      <div key={`explore--item-${id}`} className={`explore--item explore--item-${index}`}>
                        <h6>{subTitle}</h6>
                        <h3>{title}</h3>
                        <button className='explore--arrow-container'>
                          <div className='explore--arrow'></div>
                        </button>
                        <img className="explore--background" src={image.src} alt={image.alt} />
                        <div className='explore--details'>
                          <div>
                            <h3>{secondaryTitle}</h3>
                            {description}
                          </div>
                          <button className='explore--arrow-container'>
                            <div className='explore--arrow'></div>
                          </button>
                        </div>
                      </div>
                      <Accordion
                        key={`explore--item__card-about-${id}`}
                        className="explore--item__card-about"
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
                          <p>More details</p>
                        </AccordionSummary>
                        <AccordionDetails>
                          {description}
                        </AccordionDetails>
                      </Accordion>
                    </>
                  ))
                }
              </div>
            )
          })
        }
      </div>
    </Layout>
  )
};

export default Cosmos;
