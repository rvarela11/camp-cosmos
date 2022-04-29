import React from 'react';
import PropTypes from 'prop-types';
import { Twitter } from '../../../../components/header/icons/twitter';

const TeamTab = ({ members, title }) => (
  <>
    <h2 className="team-tab-title">{title}</h2>
    <div className="team-tab-grid">
      {
        members.map(({ member, name, position, social }) => {
          return ( 
            <div className="team-tab-grid__card">
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
        })
      }
    </div>
  </>
);

TeamTab.propTypes = {
  members: PropTypes.arrayOf(PropTypes.shape({
    member: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.string,
    social: PropTypes.string,
  })).isRequired,
  title: PropTypes.string.isRequired,
};

export default TeamTab;
