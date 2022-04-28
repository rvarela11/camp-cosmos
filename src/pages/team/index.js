import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Layout from '../../components/layout';
import { TABS } from './constants';

// NOTE - TabPanel will be replaced by the actual tab pages
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const Team = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <h2>Team</h2>
      <Box sx={{ width: '100%' }}>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <Box sx={{
          backgroundColor: 'rgba(0,0,0,0.3)',
          position: 'fixed',
          width: '100%',
          bottom: 0,
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
