import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/Header';
import Terminal from '../terminal/terminal';
import style from './research.module.css'

import AppContext from './../../contexts/AppContext'

const Researche = ({numScreen, numResearche, linkTo, textLinkTo}) => {
    const {researches} = useContext(AppContext);
    console.log( researches[numResearche - 1].urlImg)

  return (
    <div className={style.research}>
        <Header screen={numScreen}/>
        <div className={style.topBottom}>
          <Terminal tableau={researches} numStep={numResearche}/>
          <img src={ researches[numResearche - 1].urlImg} />
          <Link to={linkTo}>{textLinkTo}</Link>
        </div>
    </div>
  ); 
}

export default Researche;