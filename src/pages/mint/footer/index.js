import React from 'react';

// NOTE: context is for testing ONLY. Remove once endpoint/contract is connected.
import { META_MASK_STATUS } from '../context/constants';
import { useMintContext } from '../context';

const MintFooter = () => {
  const { metaMaskData, mintData } = useMintContext();
  const { address, status } = metaMaskData;
  const { price } = mintData;

  return (
    <footer className='mint-footer'>
      {
        (META_MASK_STATUS.notConnected === status || !address)
          ? <h5>{`1 CAMP COSMOS = ${price} ETH`}</h5>
          : <button className='f-button' type='button'>{`CONNECTED TO: ${address.substring(0, 5)}...${address.substring(((address.length - 1) - 4), (address.length - 1))}`}</button>
      }
    </footer>
  )
};

export default MintFooter;
