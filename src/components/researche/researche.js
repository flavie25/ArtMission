import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/Header';
import Terminal from '../terminal/terminal';
import style from './research.module.css'

import AppContext from './../../contexts/AppContext'

const Researche = ({numScreen, numResearche, linkTo, speakerName}) => {
    const {researches} = useContext(AppContext);
    console.log( researches[numResearche - 1].urlImg)

  return (
    <div className={style.research}>
        <Header screen={numScreen} speakerId={speakerName}/>
        <div className={style.topBottom}>
          <Terminal speakerId={speakerName} tableau={researches} numStep={numResearche}/>
          <div className={style.imgResearche + ' hidden-on-writing'}>
            <img src={researches[numResearche - 1].urlImg} alt={researches[numResearche - 1].alt} />
          </div>
          <Link to={linkTo}>{researches[numResearche - 1].textButton}</Link>
        </div>
    </div>
  ); 
}

export default Researche;