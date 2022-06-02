import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-material-ui-carousel';

const CarouselTabs = ({ children, setValue }) => (
  <Carousel
    animation="slide"
    autoPlay={false}
    className="team--tabs-carousel"
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
  setValue: PropTypes.func.isRequired,
};

export default CarouselTabs;
