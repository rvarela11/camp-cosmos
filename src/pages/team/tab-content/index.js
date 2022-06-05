import React from 'react';
import PropTypes from 'prop-types';
import AboutTab from './about';
import AlexandraTab from './alexandra';
import TeamTab from './team';
import WestCoastTab from './west-coast';
import { CORE_MEMBERS } from '../constants';

const TeamTabContent = {
  0: <AboutTab />,
  1: <AlexandraTab />,
  2: <WestCoastTab />,
  3: <TeamTab members={CORE_MEMBERS} title="Core Team" />,
};

const TabContent = ({ value }) => TeamTabContent[value];

TabContent.propTypes = {
  value: PropTypes.number.isRequired,
};

export default TabContent;
