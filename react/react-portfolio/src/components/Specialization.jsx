import React, { Component } from 'react';

class Specialization extends Component{
  render(){
    return (
      <div>
        <img height="150" width="150" src={this.props.spec.image} />
        <h1> {this.props.spec.language} </h1>          
        <h3> {this.props.spec.description} </h3>
      </div>
    );
        }
}

export default Specialization;