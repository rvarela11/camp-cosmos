import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabsMobile from './tabs/mobile';
import TabsDesktop from './tabs/desktop';
import Layout from '../../components/layout';
import { TAB_LABELS } from './constants';
import { useWindowDimensions } from '../../utils/hooks';

const Fireside = () => {
  const [value, setValue] = useState(0);
  const { windowWidth } = useWindowDimensions();
  const Tabs = (windowWidth <= 700) ? TabsMobile : TabsDesktop;

  return (
    <Layout>
      <Box className="fireside page-layout" sx={{ width: '100%' }}>
        <div className="fireside--tabs-content">TAB Content</div>
        <Box sx={{
          backgroundColor: 'rgba(0,0,0,0.3)',
          position: 'fixed',
          width: '100%',
          bottom: 0,
          left: 0,
        }}>
          {
            windowWidth && (
              <Tabs setValue={setValue} value={value}>
                {
                  TAB_LABELS.map(({ id, label }) => (
                    <Tab
                      key={id}
                      className="mui-tabs__tab"
                      disableRipple
                      label={label}
                    />
                  ))
                }
              </Tabs>
            )
          }
        </Box>
      </Box>
    </Layout>
  );
};

export default Fireside;
