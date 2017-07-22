import React from 'react';
import ReactDOM from 'react-dom';
import {HelloPlanet} from './components/HelloPlanet';
import {FirstProps} from './components/FirstProps';


var obj = {
  myFavNum:0
};

ReactDOM.render(
  <div>
    <HelloPlanet name="Elif"/>
    <HelloPlanet name="Serhat"/>
    <FirstProps myObj={obj} />
  </div>,
  document.getElementById('firstapp')
);
