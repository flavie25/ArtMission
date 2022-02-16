import React, { useContext } from 'react';
import Header from '../../components/header/Header';
import { Link } from 'react-router-dom';
import Terminal from '../../components/terminal/terminal';
import AppContext from '../../contexts/AppContext'
import './end.css';
import './../../components/question/question.css'

const Defeat = () => {
  const {ending} = useContext(AppContext)
  return (
    <div className="defeat question">
        <Header screen={10} speakerId={false}/>
        <Terminal tableau={ending} numStep={3} speakerId={false}/>
        <div className="endButton">
          <Link to='/credits'>Terminé</Link> 
          <Link to='/win'>Voir l'autre fin</Link> 
        </div>
    </div>
  );
};

export default Defeat;