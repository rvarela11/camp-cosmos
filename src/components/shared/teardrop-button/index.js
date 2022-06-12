import React from 'react';
import PropTypes from 'prop-types';

const TearDropButton = ({
  ariaLabel,
  children,
  className,
  disabled,
  onClick,
}) => (
  <button
    aria-label={ariaLabel}
    className={`${className} teardrop-button`}
    disabled={disabled}
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
);

TearDropButton.propTypes = {
  ariaLabel: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

TearDropButton.defaultProps = {
  ariaLabel: "",
  className: "",
  disabled: false,
  label: "",
  onClick: () => {},
};


export default TearDropButton;
