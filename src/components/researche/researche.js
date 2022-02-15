import React, { useContext, useState } from 'react';
import Header from '../header/Header';
import Terminal from '../terminal/terminal';


import AppContext from './../../contexts/AppContext'


const Researche = ({numScreen, numResearche}) => {
    const {researches} = useContext(AppContext);

  return (
    <div>
        <Header screen={numScreen}/>
        <Terminal tableau={researches} numStep={numResearche}/>
    </div>
  );
};

export default Researche;