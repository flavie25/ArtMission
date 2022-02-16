import React, { useContext } from 'react';
import Header from '../../components/header/Header';
import { Link } from 'react-router-dom';
import Terminal from '../../components/terminal/terminal';
import AppContext from '../../contexts/AppContext'

const Defeat = () => {
  const {ending} = useContext(AppContext)
  return (
    <div className="Defeat">
        <Header screen={10}/>
        <Terminal tableau={ending} numStep={3}/>
        <Link to='/credits'>Terminé</Link> 
        <Link to='/win'>Voir l'autre fin</Link> 
    </div>
  );
};

export default Defeat;