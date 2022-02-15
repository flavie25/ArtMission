import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../contexts/AppContext'
import Header from '../../components/header/Header.js'
import './question.css';

import WrongButton from '../wrongButton'
import Terminal from '../terminal/terminal';

const Question = ({numQuestion, numScreen}) => {
    const { questions } = useContext(AppContext)
    return (
    <div className="question">
        <Header  screen={numScreen}/>
        <div className="topBottom">
            <Terminal tableau={questions} numStep={numQuestion}/>
            <div className="bottom">
                <div className="answers">
                    {questions[numQuestion - 1].answers.map((answer) => 
                    answer.correct ? <Link className="answerButton" to='/warning'>{answer.text}</Link> : <WrongButton buttonName={answer.text}></WrongButton>)}   
                </div>
                <Link className="backButton" to='/'>retour</Link>
            </div>
        </div>
    </div>
  );
};

export default Question