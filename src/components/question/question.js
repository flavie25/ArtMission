import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../contexts/AppContext'

import WrongButton from '../wrongButton'

const Question = ({numQuestion}) => {
    const { questions } = useContext(AppContext) 

    return (
    <div>
        <div className="text">
            {questions[numQuestion - 1].texts.map((text) => text)}
        </div>
        <div className="question">
            {questions[numQuestion - 1].answers.map((answer) => 
            answer.correct ? <Link className="answerButton" to='/warning'>{answer.text}</Link> : <WrongButton buttonName={answer.text}></WrongButton>)}   
        </div>
    </div>
  );
};

export default Question;