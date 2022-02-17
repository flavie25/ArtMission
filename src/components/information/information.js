import React, { useContext } from 'react';
import styles from './information.module.css'
import style from './../researche/research.module.css'
import { Link } from 'react-router-dom';
import Terminal from '../terminal/terminal';
import Header from '../header/Header';
import './../question/question.css'

import AppContext from '../../contexts/AppContext';

const Information = ({numScreen, linkTo, numInformation, speakerName}) => {
  const {informations} = useContext(AppContext);
  return (
    <div className={style.research}>
      <Header screen={numScreen} speakerId={speakerName}/>
      <div className="topBottom">
        <Terminal speakerId={speakerName} tableau={informations} numStep={numInformation}/>
        <div className={styles.infoBottom}>
          <Link to={linkTo}>{informations[numInformation - 1].textButton}</Link>
        </div>
      </div>
    </div>
  );
};

export default Information;