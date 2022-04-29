import React from 'react';
import TeamCardFront from './team-card-front';
import TeamCardBack from './team-card-back';

const TeamTab = ({ members, title }) => (
  <>
    <h2 className="team-tab-title">{title}</h2>
    <div className="team-tab-grid">
      {
        members.map((props, index) => (
          <div key={index} className="team-tab-grid__card">
            <TeamCardFront {...props} />
            <TeamCardBack {...props} />
          </div>
        ))
      }
    </div>
  </>
);

export default TeamTab;
