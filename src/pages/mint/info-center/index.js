import React from 'react';
import PropTypes from 'prop-types';
import MintButton from './mint-button';
import { META_MASK_STATUS } from '../context/constants';

const MintInfoCenter = ({ address, status }) => {

  return (
    <MintButton status={status} />
  );
}

MintInfoCenter.propTypes = {
  address: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default MintInfoCenter;
