import React from 'react';
import MintCounter from './mint-counter';
import MintButton from './mint-button';

// NOTE: context is for testing ONLY. Remove once endpoint/contract is connected.
import { useMintContext } from '../context';

const MintInfoCenter = () => {
  const { metaMaskData: { address }, mintData: { remaining } } = useMintContext();

  return (
    <>
      { (remaining > 0) && (
        <>
          { address && <MintCounter /> }
          <MintButton />
        </>
      )}
    </>
  );
};

export default MintInfoCenter;
