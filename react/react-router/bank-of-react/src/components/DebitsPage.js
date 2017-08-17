import React from 'react';

import DebitsList from './DebitsList';


const DebitsPage = (props) => {
  //var self='this'//

  return (
    <div>
      <h1>Debits</h1>

        <DebitsList debits={props.debits}/>
    </div>
  );
};

export default DebitsPage;

//just the wrapper page//