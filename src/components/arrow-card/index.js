import React from 'react';
import PropTypes from 'prop-types';
import Arrow from './arrow';

const ArrowCard = ({ className, children }) => (
  <div className={`${className} arrow-card`}>
    {children}
    <>
      <Arrow className="arrow--inactive" />
      <Arrow className="arrow--active arrow-sliding" />
    </>
  </div>
);

ArrowCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ArrowCard.defaultProps = {
  className: "",
};

export default ArrowCard;
