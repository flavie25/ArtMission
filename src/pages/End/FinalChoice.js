import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import Terminal from '../../components/terminal/terminal';
import AppContext from '../../contexts/AppContext'
import './end.css';
import './../../components/question/question.css'

const FinalChoice = () => {
    const {ending} = useContext(AppContext)
  return (
    <div className="question">
        <Header screen={9}/>
          <Terminal speakerId={true} tableau={ending} numStep={1}/>
          <div className="endButton finalChoice">
            <Link to='/lose'>J'accepte</Link> 
            <Link to='/win'>Je refuse</Link> 
        </div>
    </div>
  );
};

export default FinalChoice;