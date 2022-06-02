import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';

const MUITabs = ({
  ariaLabel,
  className,
  children,
  orientation,
  setValue,
  TabIndicatorProps,
  value,
}) => (
  <Tabs
    aria-label={ariaLabel}
    className={className}
    onChange={(_, newValue) => setValue(newValue)}
    orientation={orientation}
    TabIndicatorProps={TabIndicatorProps}
    value={value}
  >
    {children}
  </Tabs>
);

MUITabs.propTypes = {
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  orientation: PropTypes.string,
  setValue: PropTypes.func.isRequired,
  TabIndicatorProps: PropTypes.shape({}),
  value: PropTypes.number.isRequired,
};

MUITabs.defaultProps = {
  ariaLabel: '',
  className: '',
  orientation: 'vertical',
  TabIndicatorProps: {},
};

export default MUITabs;
