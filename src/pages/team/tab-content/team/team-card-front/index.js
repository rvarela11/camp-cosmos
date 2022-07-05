import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { Instagram } from '../../../../../components/header/icons/instagram';
import { Twitter } from '../../../../../components/header/icons/twitter';
import { MEMBER_IMAGES } from '../../../constants';

const TeamCardFront = ({ member, name, position, social }) => (
  <div className="team-tab-grid-card-front">
    <Image
      className="team-tab-grid-card-image"
      src={MEMBER_IMAGES[member] || MEMBER_IMAGES.default}
      alt={`${member} image`}
      priority={true}
    />
    <div className="team-tab-grid-card-role">
      <p>{name}</p>
      <p>{position}</p>
    </div>
    <div className="team-tab-grid-card-social">
      { social?.twitter && <a href={social.twitter}><Twitter /></a> }
      { social?.instagram && <a href={social.instagram}><Instagram /></a> }
    </div>
  </div>
);

TeamCardFront.propTypes = {
  member: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  social: PropTypes.shape({
    instagram: PropTypes.string,
    twitter: PropTypes.string,
  }),
};

TeamCardFront.defaultProps = {
  social: {},
};

export default TeamCardFront;
