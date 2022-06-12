import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Layout from '../../components/shared/layout';
import Tabs from '../../components/shared/tabs';
import TabContent from './tab-content';
import { TAB_CONTENT, TAB_LABELS } from './constants';

const Fireside = () => {
  const [content, setContent] = useState({});
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    const current = TAB_CONTENT.find(({ id }) => id === tabValue) || {};
    setContent(current);
  }, [tabValue]);

  return (
    <Layout>
      <Box className="fireside">
        <TabContent content={content} />
        <Tabs
          setValue={setTabValue}
          value={tabValue}
          TAB_LABELS={TAB_LABELS}
        />
      </Box>
    </Layout>
  );
};

export default Fireside;
