import React, { useContext} from 'react';
import Header from '../header/Header';
import Terminal from '../terminal/terminal';

import AppContext from './../../contexts/AppContext'

const Researche = ({numScreen, numResearche}) => {
    const {researches} = useContext(AppContext);
    console.log( researches[numResearche - 1].urlImg)

  return (
    <div>
        <Header screen={numScreen}/>
        <Terminal tableau={researches} numStep={numResearche}/>
        <img src={ researches[numResearche - 1].urlImg} />
        {/* <Link to={}/> */}
    </div>
  ); 
}

export default Researche;