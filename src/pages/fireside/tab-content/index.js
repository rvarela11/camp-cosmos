import React from 'react';
import PropTypes from 'prop-types';

const TabContent = ({ content: { header, content = [] } }) => (
  <div className="fireside--tabs-content">
    {header}
    {
      content.map(({ label, summary }, index) => (
        <div key={index}>
          {label}
          {summary}
        </div>
      ))
    }
  </div>
);

TabContent.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.number,
    header: PropTypes.node,
    content: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.node,
        summary: PropTypes.node,
      })
    )
  }).isRequired,
};

export default TabContent;
