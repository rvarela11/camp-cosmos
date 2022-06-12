import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Layout from '../../components/shared/layout';
import Tabs from '../../components/shared/tabs';
import TabContent from './tab-content';
import { TAB_LABELS } from './constants';

const Team = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <Layout>
      <Box className={tabValue === 3 ? "team page-layout" : ""}>
        <TabContent value={tabValue} />
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
