import React from 'react';

import DebitsList from ''


const DebitsPage = () => {
  return (
    <div>
      <span>Description: {props.description}</span>
          <span> | </span>
      <span>Amoubt: {props.amount} </span>
          <span> | </span>
      <span>Date: {props.date} </span>
    </div>
  );
};

export default DebitsPage;