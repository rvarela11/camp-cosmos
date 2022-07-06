import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { Instagram } from '../../../../../components/header/icons/instagram';
import { Twitter } from '../../../../../components/header/icons/twitter';

const TeamCardBack = ({ description, member, name, position, social, src }) => (
  <div className="team-tab-grid-card-back">
    <div className="team-tab-grid-card-back-role">
      <div className="team-tab-grid-card-back-role-image">
        <Image
          className="team-tab-grid-card-image"
          src={src}
          alt={`${member} image`}
          priority={true}
        />
      </div>
      <div className="team-tab-grid-card-role-description">
        <p>{name}</p>
        <p>{position}</p>
      </div>
    </div>
    <div className="team-tab-grid-card-back-description">{description}</div>
    <div className="team-tab-grid-card-social">
      { social?.twitter && <a href={social.twitter}><Twitter /></a> }
      { social?.instagram && <a href={social.instagram}><Instagram /></a> }
    </div>
  </div>
);

TeamCardBack.propTypes = {
  description: PropTypes.node.isRequired,
  member: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  social: PropTypes.shape({
    instagram: PropTypes.string,
    twitter: PropTypes.string,
  }),
  src: PropTypes.shape({
    blurDataURL: PropTypes.string,
    height: PropTypes.number,
    src: PropTypes.string,
    width: PropTypes.number,
  }).isRequired,
};

TeamCardBack.defaultProps = {
  social: {},
};

export default TeamCardBack;
