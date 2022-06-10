import React from 'react';
import PropTypes from 'prop-types';
import { META_MASK_STATUS } from '../context/constants';

const MintFooter = ({ address, status }) => (
  <footer className='mint-footer'>
    {
      (META_MASK_STATUS.connected === status)
        ? <button className='f-button' type='button'>{`CONNECTED TO: ${address.substring(0, 5)}...${address.substring(((address.length - 1) - 4), (address.length - 1))}`}</button>
        : <h5>1 CAMP COSMOS = 0.1 ETH</h5>
    }
  </footer>
);

MintFooter.propTypes = {
  address: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default MintFooter;
