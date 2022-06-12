import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from 'next/image';

const PageBGImg = ({ alt, className, src }) => (
  <div className={classNames("page-bg-img", className)}>
    <Image
      alt={alt}
      src={src}
      priority={true}
    />
  </div>
);

PageBGImg.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  src: PropTypes.shape({}).isRequired,
};

PageBGImg.defaultProps = {
  alt: "",
  className: "",
};

export default PageBGImg;
