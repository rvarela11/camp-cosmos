import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CarouselTabs from './tabs/carousel';
import MUITabs from './tabs/mui';
import AboutTab from './tab-content/about';
import AlexandraTab from './tab-content/alexandra';
import TeamTab from './tab-content/team';
import WestCoastTab from './tab-content/west-coast';
import Layout from '../../components/layout';
import { TABS, CORE_MEMBERS } from './constants';
import { useWindowDimensions } from '../../utils/hooks';

const TabContent = {
  0: <AboutTab />,
  1: <AlexandraTab />,
  2: <WestCoastTab />,
  3: <TeamTab members={CORE_MEMBERS} title="Core Team" />,
};

const Team = () => {
  const [value, setValue] = useState(0);
  const { windowWidth } = useWindowDimensions();
  const Tabs = (windowWidth < 700) ? CarouselTabs : MUITabs;
  
  return (
    <Layout>
      <Box className={value === 3 ? "team page-layout" : ""} sx={{ width: '100%' }}>
        <div className="team--tabs-content">{TabContent[value]}</div>
        <Box sx={{
          backgroundColor: 'rgba(0,0,0,0.3)',
          position: 'fixed',
          width: '100%',
          bottom: 0,
          left: 0,
        }}>
          <Tabs setValue={setValue} value={value}>
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
