import React from 'react';
import PropTypes from 'prop-types';
import MintCounter from './mint-counter';
import MintButton from './mint-button';
import { META_MASK_STATUS } from '../context/constants';

const MintInfoCenter = ({ metaMaskData: { address, status }, mintData }) => {

  return (
    <>
      { address && <MintCounter mintData={mintData} /> }
      <MintButton status={status} />
    </>
  );
}

MintInfoCenter.propTypes = {
  metaMaskData: PropTypes.shape({
    address: PropTypes.string,
    status: PropTypes.string.isRequired,
  }).isRequired,
  mintData: PropTypes.shape({}).isRequired,
};

MintInfoCenter.defaultProps = {
  metaMaskData: {
    address: '',
  }
};

export default MintInfoCenter;
