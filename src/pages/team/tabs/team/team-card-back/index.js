import React from 'react';
import PropTypes from 'prop-types';
import { Twitter } from '../../../../../components/header/icons/twitter';

const TeamCardBack = ({ description, member, name, position, social }) => (
  <div className="team-tab-grid__card-back">
    <div className="team-tab-grid__card-role">
      <div className="team-tab-grid__card-role-image">
        <img className="team-tab-grid__card-image" src={`/images/team-members/${member}.png`} alt={`${member} image`} />
      </div>
      <div className="team-tab-grid__card-role-description">
        <p>{name}</p>
        <p>{position}</p>
      </div>
    </div>
    <div className="team-tab-grid__card-description">
      <p>{description}</p>
    </div>
    <div className="team-tab-grid__card-social">
      <p>{social}</p>
      <Twitter />
    </div>
  </div>
);

TeamCardBack.propTypes = {
  description: PropTypes.string.isRequired,
  member: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  social: PropTypes.string.isRequired,
};

export default TeamCardBack;
