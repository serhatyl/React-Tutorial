import React from 'react';

export class HelloPlanet extends React.Component{
  render(){
    return <h1>Hi there {this.props.name}</h1>
  }
}

//https://facebook.github.io/react/docs/typechecking-with-proptypes.html
HelloPlanet.propTypes={
  name: React.PropTypes.string
}

HelloPlanet.defaultProps={
  name:"Serhat"
}
