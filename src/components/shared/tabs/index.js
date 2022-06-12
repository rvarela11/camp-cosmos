import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabsMobile from './carousel';
import TabsDesktop from './mui';
import { useWindowDimensions } from '../../../utils/hooks';

const sx = {
  backgroundColor: 'rgba(0,0,0,0.3)',
  position: 'fixed',
  width: '100%',
  bottom: 0,
  left: 0,
};

const Tabs = ({ setValue, value, TAB_LABELS }) => {
  const { windowWidth } = useWindowDimensions();
  const TabsComponent = (windowWidth <= 700) ? TabsMobile : TabsDesktop;

  return (
    <Box sx={sx}>
      {
        windowWidth && (
          <TabsComponent setValue={setValue} value={value}>
            {
              TAB_LABELS.map(({ id, label }) => (
                <Tab
                  key={id}
                  className="mui-tabs-tab"
                  disableRipple
                  label={label}
                />
              ))
            }
          </TabsComponent>
        )
      }
    </Box>
  );
};

export default Tabs;
