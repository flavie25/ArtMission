import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import Terminal from '../../components/terminal/terminal';
import AppContext from '../../contexts/AppContext'
import './end.css';

const FinalChoice = () => {
    const {ending} = useContext(AppContext)
  return (
    <div className="win">
        <Header screen={9}/>
        <Terminal tableau={ending} numStep={1}/>
        <div className="endButton finalChoice">
          <Link to='/win'>J'accepte</Link> 
          <Link to='/lose'>Je refuse</Link> 
        </div>
    </div>
  );
};

export default FinalChoice;