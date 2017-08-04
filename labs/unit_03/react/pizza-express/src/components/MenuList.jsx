import React, { Component } from 'react';
import PizzaData from '../pizzaData.js';
import MenuItem from './MenuItem';



class MenuList extends Component {
  render () {
    return (
      <div className="menu" id="menu">
        <h1>Menu</h1>
          <div className="menu-container">
            {PizzaData.map((item, i) => {
               return <MenuItem key={i} data={item} />
              })}
         </div>
      </div>
    );
  }
}

export default MenuList;