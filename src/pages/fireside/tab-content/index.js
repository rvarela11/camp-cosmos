import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import PageBGImg from '../../../components/shared/page-bg-img';
import backgroundImage from '../../../../public/images/pages-background/lore.png';

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
    <PageBGImg
      alt="Fireside page background image"
      className="fireside-tab--background"
      src={backgroundImage}
    />
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
