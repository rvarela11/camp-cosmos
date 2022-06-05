import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../../../components/tabs/carousel';

const CarouselTabs = ({ children, setValue }) => (
  <Carousel setValue={setValue}>
    {children}
  </Carousel>
);

CarouselTabs.propTypes = {
  setValue: PropTypes.func.isRequired,
};

export default CarouselTabs;
