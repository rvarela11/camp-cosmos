import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import loreImage from '../../../../public/images/camp-cosmos-lore.png';

const TabContent = ({ content: { header, content = [] } }) => (
  <>
    <div className="fireside--tabs-content page-layout">
      {header}
      <div className="fireside--tabs-content-summary">
        {
          content.map(({ label, summary }, index) => (
            <Fragment key={index}>
              {label}
              {summary}
            </Fragment>
          ))
        }
      </div>
    </div>
    <div className="fireside-tab--background">
      <Image
        src={loreImage}
        alt="Fireside page background image"
        priority={true}
      />
    </div>
  </>
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
