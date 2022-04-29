import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Alexandra from './tabs/alexandra';
import Layout from '../../components/layout';
import { TABS } from './constants';

const TabContent = {
  0: <Alexandra />,
  1: "Item 2",
  2: "Item 3",
};

const Team = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <Box className="team" sx={{ width: '100%' }}>
        <div className="team--tabs-content">{ TabContent[value]}</div>
        <Box sx={{
          backgroundColor: 'rgba(0,0,0,0.3)',
          position: 'fixed',
          width: '100%',
          bottom: 0,
          left: 0,
        }}>
          <Tabs
            aria-label="Team page tabs"
            className="team--tabs"
            onChange={handleChange}
            TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
            value={value}
          >
            {
              TABS.map(({ id, label }) => (
                <Tab
                  key={id}
                  className="team--tabs__tab"
                  disableRipple
                  label={label}
                />
              ))
            }
          </Tabs>
        </Box>
      </Box>
    </Layout>
  );
};

export default Team;
