import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { META_MASK_STATUS } from '../../context/constants';

const MINT_BUTTON_LABELS = {
  [META_MASK_STATUS.notConnected]: 'Connect Wallet',
  [META_MASK_STATUS.connecting]: 'Connecting...',
  [META_MASK_STATUS.connected]: 'Mint 1 - 0.1 ETH',
  [META_MASK_STATUS.minting]: 'Minting 1 Camp Cosmos...',
};

const MintButton = ({ status }) => {
  const [label, setLabel] = useState('');

  useEffect(() => {
    setLabel(MINT_BUTTON_LABELS[META_MASK_STATUS[status]])
  }, [status]);

  console.log({ label });

  return (
    <button type="button" className="mint-button tear-button">{label}</button>
  );
}

MintButton.propTypes = {
  status: PropTypes.string.isRequired,
};

export default MintButton;
