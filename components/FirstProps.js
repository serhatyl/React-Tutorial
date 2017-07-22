import React from 'react';

export class FirstProps extends React.Component{
  render(){
    return <p>Your favourite number is {this.props.myObj.myFavNum}</p>
  }
}
