import React from 'react';

export class StateComponent extends React.Component{
  constructor(props){
    super();
    console.log(props);
    this.state = {
      counter:0
    };
    setInterval(()=>{
      this.setState({counter:this.state.counter + 1})
    } , 1000);
  }


  render(){
    return <h1>State Counting {this.state.counter}</h1>
  }
}
