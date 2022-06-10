import React, { createContext, useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { META_MASK_STATUS } from './constants';

const MintContext = createContext({});

export const useAppContext = () => useContext(MintContext);

const walletAddress = '0x1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ1234';

const MintContextProvider = ({ children }) => {
  const [metaMaskData, setMetaMaskData] = useState({
    address: walletAddress,
    status: META_MASK_STATUS.notConnected,
  });

  const value = useMemo(() => ({
    metaMaskData,
  }), [metaMaskData]);

  return <MintContext.Provider value={value}>{children}</MintContext.Provider>;
};

MintContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MintContext, MintContextProvider };
