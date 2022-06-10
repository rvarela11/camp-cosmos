import React from 'react';
import { useAppContext } from '../context';
import { META_MASK_STATUS } from '../context/constants';

const MintFooter = () => {
  const { metaMaskData: { address, status } } = useAppContext();

  return (
    <footer className='mint-footer'>
      {
        (META_MASK_STATUS.connected === status)
          ? <button className='f-button' type='button'>{`CONNECTED TO: ${address.substring(0, 5)}...${address.substring(((address.length - 1) - 4), (address.length - 1))}`}</button>
          : <h5>1 CAMP COSMOS = 0.1 ETH</h5>
      }
    </footer>
  )
};

export default MintFooter;
