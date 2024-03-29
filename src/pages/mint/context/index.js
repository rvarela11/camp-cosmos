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
    price: 0.1,
    quantity: 0,
    remaining: 4,
    role: ROLES.public,
    total: 5,
    totalSupply: 9000,
  });

  const [notification, setNotification] = useState({
    content: undefined,
    severity: undefined,
    title: undefined,
  });

  useEffect(() => {
    if (metaMaskData.status === META_MASK_STATUS.connecting) {
      setTimeout(() => setMetaMaskData((prevProps) => ({
        ...prevProps,
        address: '0x1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ1234',
        status: META_MASK_STATUS.connected,
      })), 1000);
    }
    if (metaMaskData.status === META_MASK_STATUS.minting) {
      setTimeout(() => {
        setMetaMaskData((prevProps) => ({
          ...prevProps,
          status: META_MASK_STATUS.connected,
        }));
        setMintData((prevProps) => ({
          ...prevProps,
          remaining: prevProps.remaining - mintData.quantity,
        }));
        // NOTE: Uncomment to display error notification
        // setNotification({
        //   content: 'Something went wrong and you were not able to mint, please try again',
        //   severity: 'error',
        // });
      }, 1000);
    }
  }, [metaMaskData.status, mintData.quantity]);

  useEffect(() => {
    setMintData((prevProps) => ({
      ...prevProps,
      quantity: mintData.remaining,
    }));
  }, [mintData.remaining]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMintData((prevProps) => ({
        ...prevProps,
        totalSupply: prevProps.totalSupply + 1,
      }));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const value = useMemo(() => ({
    metaMaskData,
    mintData,
    notification,
    setMetaMaskData,
    setMintData,
    setNotification,
  }), [
    metaMaskData,
    mintData,
    notification,
    setMetaMaskData,
    setMintData,
    setNotification,
  ]);

  return <MintContext.Provider value={value}>{children}</MintContext.Provider>;
};

MintContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MintContext, MintContextProvider };
