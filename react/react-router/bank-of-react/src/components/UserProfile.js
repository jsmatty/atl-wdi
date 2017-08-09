import React, {Component} from 'react';
import  {link} from './home'
class UserProfile extends Component {
  render() {
    return (
        <div>
          <h1>User Profile</h1>

          <div>Username: {this.props.userName}</div>
          <div>Member Since: {this.props.memberSince}</div>
          
          <link to="/">Home</link>
        </div>
    );
  }
}

export default UserProfile;