import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { META_MASK_STATUS } from '../../context/constants';

// NOTE: context is for testing ONLY. Remove once endpoint/contract is connected.
import { useMintContext } from '../../context';

const MintCounter = () => {
  const { metaMaskData, mintData, setMintData } = useMintContext();
  const { status } = metaMaskData;
  const { quantity, remaining, total } = mintData;

  const [disabled, setDisabled] = useState(false);

  const handleOnClick = (current) => {
    setMintData((prevProps) => ({...prevProps, quantity: current }));
  };

  useEffect(() => {
    setDisabled(status === META_MASK_STATUS.minting);
  }, [status]);

  return (
    <div className="mint-counter">
        <h5 className="mint--content-subtitle">{`You can mint up to ${remaining} Camp Cosmos`}</h5>
        <div className="mint-counter--buttons">
          {
            [...Array(total)].map((_, index) => {
              const current = index + 1;
              const isDisabled = current > remaining;

              return (
                <button
                  key={index}
                  className={
                    classNames(
                      "mint-counter--button tear-button",
                      { ["mint-counter--button-selected"]: current === quantity },
                      { ["mint-counter--button-disabled"]: disabled || isDisabled },
                    )
                  }
                  disabled={disabled || isDisabled}
                  onClick={() => handleOnClick(current)}
                  type="button"
                >
                  {current}
                </button>
              )
            })
          } 
        </div>
    </div>
  );
};

export default MintCounter;
