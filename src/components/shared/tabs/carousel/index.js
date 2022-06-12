import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Carousel from 'react-material-ui-carousel';

const CarouselTabs = ({
  children,
  className,
  setValue,
}) => (
  <Carousel
    animation="slide"
    autoPlay={false}
    className={classNames("mui-tabs-carousel", className)}
    indicators={false}
    navButtonsAlwaysVisible
    navButtonsProps={{ disableRipple: true }}
    next={(newValue) => setValue(newValue)}
    prev={(newValue) => setValue(newValue)}
  >
    {children}
  </Carousel>
);

CarouselTabs.propTypes = {
  className: PropTypes.string,
  setValue: PropTypes.func.isRequired,
};

CarouselTabs.defaultProps = {
  className: '',
};

export default CarouselTabs;
