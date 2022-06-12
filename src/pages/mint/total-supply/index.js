import React from 'react';

// NOTE: context is for testing ONLY. Remove once endpoint/contract is connected.
import { useMintContext } from '../context';

const MintTotalSupply = () => {
  const { mintData: { totalSupply } } = useMintContext();

  return (
    <div className="mint--content-summary-total-supply">
      <h5 className="mint--content-subtitle">Camp Cosmos Minted</h5>
      <h2>
        <span>{totalSupply}</span>/10000
      </h2>
    </div>
  )
};

export default MintTotalSupply;
