import React, {Component} from 'react';

class AccountBalance extends Component {
  render() {
    return (
        <div>
          Balance: {this.props.accountBalance}
        </div>
        //THEN I should see an Account Balance that accurately represents my Debits subtracted from my Credits
    );
  }
}

export default AccountBalance;