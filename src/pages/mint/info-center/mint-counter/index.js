import React from 'react';
import PropTypes from 'prop-types';

// NOTE: useMintContext is for testing ONLY. Remove once endpoint/contract is connected.
import { useMintContext } from '../../context';

const MintCounter = ({ mintData: { total } }) => {
  const { setMintData } = useMintContext();
  const test = [...Array(total)].map((_, index) => (
    console.log({ index })
  ));

  return (
    <p>YO</p>
  );
}

MintCounter.propTypes = {
  mintData: PropTypes.shape({
    quantity: PropTypes.number,
    remaining: PropTypes.number,
    role: PropTypes.string,
    total: PropTypes.number,
  }).isRequired,
};

MintCounter.defaultProps = {};

export default MintCounter;
