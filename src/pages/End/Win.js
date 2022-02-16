import React, { useContext } from 'react';
import Header from '../../components/header/Header';
import { Link } from 'react-router-dom';
import Terminal from '../../components/terminal/terminal';
import AppContext from '../../contexts/AppContext';
import './end.css';
import './../../components/question/question.css'

const Win = () => {
    const {ending} = useContext(AppContext)
  return (
    <div className="question">
        <Header screen={11}/>
        <Terminal tableau={ending} numStep={2}/>
        <div className="endButton">
          <Link to='/credits'>Terminé</Link> 
          <Link to='/lose'>Voir l'autre fin</Link> 
        </div>
    </div>
  );
};

export default Win;