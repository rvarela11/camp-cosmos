import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AboutTab from './tabs/about';
import AlexandraTab from './tabs/alexandra';
import TeamTab from './tabs/team';
import Layout from '../../components/layout';
import { TABS, WEST_COAST_MEMBERS, CORE_MEMBERS } from './constants';

const TabContent = {
  0: <AboutTab />,
  1: <AlexandraTab />,
  2: <TeamTab members={WEST_COAST_MEMBERS} title="West Coast" />,
  3: <TeamTab members={CORE_MEMBERS} title="Core Team" />,
};

const Team = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <Box className={value === 0 ? "" : "team"} sx={{ width: '100%' }}>
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
