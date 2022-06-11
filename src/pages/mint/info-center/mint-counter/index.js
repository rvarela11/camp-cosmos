import React from 'react';

// NOTE: useMintContext is for testing ONLY. Remove once endpoint/contract is connected.
import { useMintContext } from '../../context';

const MintCounter = () => {
  const { setMintData } = useMintContext();

  return (
    <p>Counter</p>
  );
}

export default MintCounter;
