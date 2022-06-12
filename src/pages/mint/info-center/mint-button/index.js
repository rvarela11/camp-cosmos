import React, { useEffect, useState } from 'react';
import TearDropButton from '../../../../components/shared/teardrop-button';

// NOTE: context is for testing ONLY. Remove once endpoint/contract is connected.
import { META_MASK_STATUS } from '../../context/constants';
import { useMintContext } from '../../context';

const MINT_BUTTON_LABELS = {
  [META_MASK_STATUS.notConnected]: () => 'Connect Wallet',
  [META_MASK_STATUS.connecting]: () => 'Connecting...',
  [META_MASK_STATUS.connected]: (quantity, price) => `Mint ${quantity} - ${(quantity * price).toFixed(1)} ETH`,
  [META_MASK_STATUS.minting]: (quantity) => `Minting ${quantity} Camp Cosmos...`,
};

const MintButton = () => {
  const { metaMaskData, mintData, setMetaMaskData } = useMintContext();
  const { status } = metaMaskData;
  const { price, quantity } = mintData;

  const [disabled, setDisabled] = useState(false);
  const [label, setLabel] = useState('');

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

  useEffect(() => {
    setLabel(MINT_BUTTON_LABELS[META_MASK_STATUS[status]](quantity, price));
    setDisabled(status === META_MASK_STATUS.connecting || status === META_MASK_STATUS.minting);
  }, [price, quantity, status]);

  return (
    <TearDropButton
      ariaLabel="Mint action button"
      className="mint-button"
      disabled={disabled}
      onClick={handleOnClick}
    >
      {label}
    </TearDropButton>
  );
};

export default MintButton;
