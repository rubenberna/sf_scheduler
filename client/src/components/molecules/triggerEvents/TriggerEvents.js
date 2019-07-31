import React from 'react';

import HeaderDefault from '../../atoms/Header'
import ButtonDefault from '../../atoms/Button'

const TriggerEvents = ({ headerMsg, btnMsg, runQuery}) => {
  return(
    <>
      <HeaderDefault size={'large'}>
        { headerMsg }
      </HeaderDefault>
      <ButtonDefault
        onClick={e => runQuery()}>
        { btnMsg }
      </ButtonDefault>
    </>
  )
}

export default TriggerEvents