import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './components/Home.js';
import UserProfile from './components/UserProfile';

import axios from 'axios';

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
       },
       debits: [],
       credits: [],
    }
  }

  _getDebits = () => {
    axios.get('http://localhost:4000/debits')
    .then((response) => {
      const debits = response.data;
      //in terminal it looks like an array of objects so no need to change the [] on debits.
    this.setState({ debits });
  });
  };

  _getCredits = () => {
    axios.get('http://localhost:4000/credits')
    .then((response) => {
      const credits = response.data;
      //in terminal it looks like an array of objects so no need to change the [] on credits.
    this.setState({  credits });
   });
  };

_calculateAccountBalance = () => {
 // const totalCredits = 0;
  // for(var i=0; i < this.state.credits.length; i++) {//
  //   totalCredits += this.state.creditrs[i].amount;//
// }
const totalCredits = this.state.credits.reduce((totalCredits, credit) => { 
  return totalCredits + credit.amount;
}, 0)


const totalDebits = this.state.debits.reduce((totalDebits, debit) => {
    return totalDebits + debit.amount;
  }, 0)



 return totalCredits - totalDebits;
}

componentWillMount () {
  //get the debits
this._getDebits();
this._getCredits();

  //get the credits
}

  render() {


const accountBalance = this._calculateAccountBalance();

const HomeComponent = () => (<Home accountBalance={this._calculateAccountBalance()}/>);
const UserProfileComponent = () => (
    <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );

    return (
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
          </div>
        </Router>
    );
  }

}

export default App;