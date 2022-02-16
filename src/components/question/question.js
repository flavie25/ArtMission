import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../contexts/AppContext'
import Header from '../../components/header/Header.js'
import './question.css';

import WrongButton from '../wrongButton'
import Terminal from '../terminal/terminal';

const Question = ({numQuestion, numScreen, linkTo, backButton, speakerName}) => {
    const { questions } = useContext(AppContext)
    return (
    <div className="question">
        <Header screen={numScreen} speakerId={speakerName}/>
        <div className="topBottom">
            <Terminal speakerId={speakerName} tableau={questions} numStep={numQuestion}/>
            <div className="bottom">
                <div className="answers">
                    {questions[numQuestion - 1].answers.map((answer) => 
                    answer.correct ? <Link className="answerButton" to={linkTo}>{answer.text}</Link> : <WrongButton buttonName={answer.text}></WrongButton>)}   
                </div>
                <Link className="backButton" to={backButton}>retour</Link>
            </div>
        </div>
    </div>
  );
};

export default Question