import React from 'react';

export class ClickEventComp extends React.Component{
  constructor(props){
    super(props);
    console.log(props);
    this.state={
      counter:0
    };
    this.updateThisCounter = this.updateThisCounter.bind(this);
  }
//10. satırı yazma sebebimiz es6 ' da fonksiyonu otomatik bind etmiyr oluşu
//bir diğer çözüm yöntemi ise 22.satırdaki butonu aşağıdaki gibi yazmaktır
//<button onClick={()=>{this.updateThisCounter();}}>Update Counter</button>
  updateThisCounter(){
    this.setState({counter : this.state.counter + 1})
  }

  render(){
    return <div>
            <span>{this.state.counter}</span>
            <button onClick={this.updateThisCounter}>Update Counter</button>
           </div>
  }
}
