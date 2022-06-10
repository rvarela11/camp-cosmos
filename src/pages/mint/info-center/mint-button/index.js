import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { META_MASK_STATUS } from '../../context/constants';

// NOTE: useMintContext is for testing ONLY. Remove once endpoint/contract is connected.
import { useMintContext } from '../../context';

const MINT_BUTTON_LABELS = {
  [META_MASK_STATUS.notConnected]: 'Connect Wallet',
  [META_MASK_STATUS.connecting]: 'Connecting...',
  [META_MASK_STATUS.connected]: 'Mint 1 - 0.1 ETH',
  [META_MASK_STATUS.minting]: 'Minting 1 Camp Cosmos...',
};

const MintButton = ({ status }) => {
  const { setMetaMaskData } = useMintContext();
  const [disabled, setDisabled] = useState(false);
  const [label, setLabel] = useState('');

  useEffect(() => {
    setLabel(MINT_BUTTON_LABELS[META_MASK_STATUS[status]]);
    setDisabled(status === META_MASK_STATUS.connecting || status === META_MASK_STATUS.minting);
  }, [status]);

  const handleOnClick = () => {
    if (status === META_MASK_STATUS.notConnected) {
      setMetaMaskData((prevProps) => ({
        ...prevProps,
        status: META_MASK_STATUS.connecting,
      }));
    }
    if (status === META_MASK_STATUS.connected) {
      setMetaMaskData((prevProps) => ({
        ...prevProps,
        status: META_MASK_STATUS.minting,
      }));
    }
  };

  return (
    <button type="button" className="mint-button tear-button" disabled={disabled} onClick={handleOnClick}>{label}</button>
  );
}

MintButton.propTypes = {
  status: PropTypes.string.isRequired,
};

export default MintButton;
