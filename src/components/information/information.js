import React, { useContext } from 'react';
import style from '../researche/research.module.css'
import { Link } from 'react-router-dom';
import Terminal from '../terminal/terminal';
import Header from '../header/Header';

import AppContext from '../../contexts/AppContext';

const Information = ({numScreen, linkTo, numInformation}) => {
  const {informations} = useContext(AppContext);
  return (
    <div>
      <Header screen={numScreen}/>
      <div className={style.topBottom}>
        <Terminal tableau={informations} numStep={numInformation}/>
        <Link to={linkTo}>{informations[numInformation - 1].textButton}</Link>
      </div>
    </div>
  );
};

export default Information;