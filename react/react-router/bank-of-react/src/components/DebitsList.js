import React from 'react';

import Debit from './Debit';

const DebitsList= (props) => {

  const debitComponents = props.debits.map((debit) => {
    return <Debit 
        description={debit.description}/>;
  })

  return (
    <div> 
      {debitComponents}
    </div>
  );
};

export default DebitsList;