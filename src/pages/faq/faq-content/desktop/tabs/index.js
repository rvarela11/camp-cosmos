import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '../../../../../components/tabs/mui';
import { TAB_LABELS } from '../../constants';

const FAQTabs = ({ setValue, value }) => (
  <Box>
    <h5 className="faq--content__tabs-title">FAQs</h5>
    <Tabs className="faq--content__tabs" orientation="vertical" setValue={setValue} value={value}>
      {
        TAB_LABELS.map(({ id, label }) => (
          <Tab
            key={id}
            className="faq--content__tabs-tab"
            disableRipple
            label={label}
          />
        ))
      }
    </Tabs>
  </Box>
);

FAQTabs.propTypes = {
  setValue: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default FAQTabs;
