import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { Twitter } from '../../../../../components/header/icons/twitter';
import { MEMBER_IMAGES } from '../../../constants';

const TeamCardBack = ({ description, member, name, position, social }) => (
  <div className="team-tab-grid-card-back">
    <div className="team-tab-grid-card-role">
      <div className="team-tab-grid-card-role-image">
        <Image
          className="team-tab-grid-card-image"
          src={MEMBER_IMAGES[member]}
          alt={`${member} image`}
          priority={true}
        />
      </div>
      <div className="team-tab-grid-card-role-description">
        <p>{name}</p>
        <p>{position}</p>
      </div>
    </div>
    <div className="team-tab-grid-card-description">
      <p>{description}</p>
    </div>
    <div className="team-tab-grid-card-social">
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
