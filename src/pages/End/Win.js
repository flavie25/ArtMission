import React, { useContext } from 'react';
import Header from '../../components/header/Header';
import { Link } from 'react-router-dom';
import Terminal from '../../components/terminal/terminal';
import AppContext from '../../contexts/AppContext'

const Win = () => {
    const {ending} = useContext(AppContext)
  return (
    <div className="question5">
        <Header screen={10}/>
        <Terminal tableau={ending} numStep={2}/>
        <Link to='/'>Terminé</Link> 
        <Link to='/lose'>Voir l'autre fin</Link> 
    </div>
  );
};

export default Win;