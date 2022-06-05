import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Layout from '../../components/layout';
import Tabs from '../../components/tabs';
import AboutTab from './tab-content/about';
import AlexandraTab from './tab-content/alexandra';
import TeamTab from './tab-content/team';
import WestCoastTab from './tab-content/west-coast';
import { TAB_LABELS, CORE_MEMBERS } from './constants';

const TabContent = {
  0: <AboutTab />,
  1: <AlexandraTab />,
  2: <WestCoastTab />,
  3: <TeamTab members={CORE_MEMBERS} title="Core Team" />,
};

const Team = () => {
  const [tabValue, setTabValue] = useState(0);
  
  return (
    <Layout>
      <Box className={tabValue === 3 ? "team page-layout" : ""} sx={{ width: '100%' }}>
        <div className="team--tabs-content">{TabContent[tabValue]}</div>
        <Tabs
          setValue={setTabValue}
          value={tabValue}
          TAB_LABELS={TAB_LABELS}
        />
      </Box>
    </Layout>
  );
};

export default Team;
