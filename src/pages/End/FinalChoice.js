import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import Terminal from '../../components/terminal/terminal';
import AppContext from '../../contexts/AppContext'

const FinalChoice = () => {
    const {ending} = useContext(AppContext)
  return (
    <div className="question5">
        <Header screen={9}/>
        <Terminal tableau={ending} numStep={1}/>
        
        <Link to='/win'>J'accepte</Link> 
        <Link to='/win'>Je refuse</Link> 
    </div>
  );
};

export default FinalChoice;