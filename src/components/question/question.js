import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../contexts/AppContext'
import Header from '../../components/header/Header.js'
import style from './question.css';

import WrongButton from '../wrongButton'

const Question = ({numQuestion, numScreen}) => {
    const { questions } = useContext(AppContext) 
    const d = new Date()
    let day = d.getDate()
    let month1 = 1 + d.getMonth()
    let year = d.getFullYear()
    let hours = 1 + d.getUTCHours()
    let minutes = d.getUTCMinutes()
    let seconds = d.getUTCSeconds()
    return (
    <div className="question">
        <Header screen={numScreen} />
        {questions[numQuestion - 1].texts.map((text) => (
            <div className="textContainer">
                <div className="leftText">
                    <p>Agent.206</p>
                    <p>{hours}.{minutes}.{seconds}</p>
                </div>
                {text}
            </div>
        ))}
        <div className="question">
            {questions[numQuestion - 1].answers.map((answer) => 
            answer.correct ? <Link className="answerButton" to='/warning'>{answer.text}</Link> : <WrongButton buttonName={answer.text}></WrongButton>)}   
        </div>
    </div>
  );
};

export default Question