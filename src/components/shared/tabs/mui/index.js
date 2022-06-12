import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tabs from '@mui/material/Tabs';

const MUITabs = ({
  ariaLabel,
  className,
  children,
  orientation,
  setValue,
  value,
}) => (
  <Tabs
    aria-label={ariaLabel}
    className={classNames("mui-tabs", className)}
    onChange={(_, newValue) => setValue(newValue)}
    orientation={orientation}
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
  value: PropTypes.number.isRequired,
};

MUITabs.defaultProps = {
  ariaLabel: '',
  className: '',
  orientation: 'horizontal',
};

export default MUITabs;
