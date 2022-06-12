import React from 'react';
import Link from 'next/link';
import TearDropButton from '../../../components/shared/teardrop-button';
import { ROUTES } from '../../../../src/utils/routes';

// NOTE: context is for testing ONLY. Remove once endpoint/contract is connected.
import { useMintContext } from '../context';

const MintMessageCenter = () => {
  const { mintData: { remaining, role, total } } = useMintContext();

  const renderMessage = () => {
    if (remaining > 0) {
      return <h2 className="mint--content-message-title">Welcome To The <span>{role} Pre-Sale</span></h2>;
    }

    return (
      <>
        <h5 className="mint--content-subtitle">Congratulations!</h5>
        <h2 className="mint--content-message-title">
          You have successfully <span>minted <span className="mint--content-message-title-total">{total}</span> Camp Cosmos!</span>
        </h2>
        <Link href={ROUTES.HOME}>
          <a>
            <TearDropButton ariaLabel="Home page link" className="mint--content-message-button">
              Back to home page
            </TearDropButton>
          </a>
        </Link>
      </>
    );
  }

  return (
    <div>
      { renderMessage() }
    </div>
  )
};

export default MintMessageCenter;
