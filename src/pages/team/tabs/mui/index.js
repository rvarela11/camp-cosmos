import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';

const MUITabs = ({ children, setValue, value }) => (
  <Tabs
    aria-label="Team page tabs"
    className="team--tabs"
    onChange={(_, newValue) => setValue(newValue)}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    value={value}
  >
    {children}
  </Tabs>
);

MUITabs.propTypes = {
  setValue: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default MUITabs;
