import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '../../../../components/tabs/mui';

const MUITabs = ({ children, setValue, value }) => (
  <Tabs
    ariaLabel="Team page tabs"
    className="team--tabs"
    setValue={setValue}
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
