import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { Twitter } from '../../../../../components/header/icons/twitter';
import { MEMBER_IMAGES } from '../../../constants';

const TeamCardFront = ({ member, name, position, social }) => (
  <div className="team-tab-grid__card-front">
    <Image
      className="team-tab-grid__card-image"
      src={MEMBER_IMAGES[member]}
      alt={`${member} image`}
      priority={true}
    />
    <div className="team-tab-grid__card-role">
      <p>{name}</p>
      <p>{position}</p>
    </div>
    <div className="team-tab-grid__card-social">
      <p>{social}</p>
      <Twitter />
    </div>
  </div>
);

TeamCardFront.propTypes = {
  member: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  social: PropTypes.string.isRequired,
};

export default TeamCardFront;
