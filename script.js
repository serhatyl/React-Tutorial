import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {HelloPlanet} from './components/HelloPlanet';
import {FirstProps} from './components/FirstProps';
import {StateComponent} from './components/StateComponent';


var obj = {
  myFavNum:0
};

//HelloPlanet.defaultprops serhat olarak tanımlı componentte
//Eğer int value yollarsak console'da hata verecektir
ReactDOM.render(
  <div>
    <HelloPlanet name={2}/>
    <HelloPlanet name={"Test2"}/>
    <HelloPlanet />
    <FirstProps myObj={obj} />
    <StateComponent/>
  </div>,
  document.getElementById('firstapp')
);
