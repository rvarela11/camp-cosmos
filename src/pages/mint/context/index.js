import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { META_MASK_STATUS } from './constants';
import { ROLES } from '../constants';

const MintContext = createContext({});

export const useMintContext = () => useContext(MintContext);

const MintContextProvider = ({ children }) => {
  const [metaMaskData, setMetaMaskData] = useState({
    address: undefined,
    status: META_MASK_STATUS.notConnected,
  });

  const [mintData, setMintData] = useState({
    quantity: 0,
    remaining: 2,
    role: ROLES.explorers,
    total: 2,
  });

  useEffect(() => {
    if (metaMaskData.status === META_MASK_STATUS.connecting) {
      setTimeout(() => setMetaMaskData((prevProps) => ({
        ...prevProps,
        address: '0x1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ1234',
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
    mintData,
    setMetaMaskData,
    setMintData,
  }), [
    metaMaskData,
    mintData,
    setMetaMaskData,
    setMintData,
  ]);

  return <MintContext.Provider value={value}>{children}</MintContext.Provider>;
};

MintContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MintContext, MintContextProvider };
