import React from 'react';
import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';
import Tabs from '../../../../../components/tabs/mui';
import { TAB_LABELS } from '../../constants';

const FAQTabs = ({ setValue, value }) => (
  <Tabs orientation="vertical" setValue={setValue} value={value}>
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
);

FAQTabs.propTypes = {
  setValue: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default FAQTabs;
