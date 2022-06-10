import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { META_MASK_STATUS } from './constants';

const MintContext = createContext({});

export const useMintContext = () => useContext(MintContext);

const walletAddress = '0x1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ1234';

const MintContextProvider = ({ children }) => {
  const [metaMaskData, setMetaMaskData] = useState({
    address: walletAddress,
    status: META_MASK_STATUS.notConnected,
  });

  useEffect(() => {
    if (metaMaskData.status === META_MASK_STATUS.connecting) {
      setTimeout(() => setMetaMaskData((prevProps) => ({
        ...prevProps,
        status: META_MASK_STATUS.connected,
      })), 1000)
    }
    if (metaMaskData.status === META_MASK_STATUS.minting) {
      setTimeout(() => {
        console.log('SUCCESS');
        setMetaMaskData((prevProps) => ({
          ...prevProps,
          status: META_MASK_STATUS.connected,
        }));
      }, 1000)
    }
  }, [metaMaskData.status]);

  const value = useMemo(() => ({
    metaMaskData,
    setMetaMaskData,
  }), [metaMaskData, setMetaMaskData]);

  return <MintContext.Provider value={value}>{children}</MintContext.Provider>;
};

MintContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MintContext, MintContextProvider };
