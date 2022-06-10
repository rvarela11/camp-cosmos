import React from 'react';
import PropTypes from 'prop-types';
import { META_MASK_STATUS } from '../context/constants';

const MintFooter = ({ address, status }) => (
  <footer className='mint-footer'>
    {
      (META_MASK_STATUS.notConnected === status || !address)
        ? <h5>1 CAMP COSMOS = 0.1 ETH</h5>
        : <button className='f-button' type='button'>{`CONNECTED TO: ${address.substring(0, 5)}...${address.substring(((address.length - 1) - 4), (address.length - 1))}`}</button>
    }
  </footer>
);

MintFooter.propTypes = {
  address: PropTypes.string,
  status: PropTypes.string.isRequired,
};

MintFooter.defaultProps = {
  address: '',
};

export default MintFooter;
