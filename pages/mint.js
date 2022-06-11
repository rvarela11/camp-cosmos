import React from 'react';
import Mint from '../src/pages/mint';

// NOTE: context is for testing ONLY. Remove once endpoint/contract is connected.
import { MintContextProvider } from '../src/pages/mint/context';

const MintPage = () => (
  <MintContextProvider>
    <Mint />
  </MintContextProvider>
);

export default MintPage;
