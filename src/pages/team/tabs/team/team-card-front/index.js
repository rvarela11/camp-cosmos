import React from 'react';
import PropTypes from 'prop-types';
import { Twitter } from '../../../../../components/header/icons/twitter';

const TeamCardFront = ({ member, name, position, social }) => (
	<div className="team-tab-grid__card-front">
		<img className="team-tab-grid__card-image" src={`/images/team-members/${member}.png`} alt={`${member} image`} />
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
