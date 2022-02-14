import clsx from 'clsx';
import React, { useState } from 'react';
import Player from '../../components/player/Player';
import Question from '../../components/question/question';
import style from './question.module.css';

const Question1 = () => {
  const [firstAnswer, setFirstAnswer] = useState(true);
  const [secondAnswer, setSecondAnswer] = useState(true);
  
  const firstWrong = () =>{
    setFirstAnswer(false);
  }
  const secondWrong = () =>{
    setSecondAnswer(false); 
  }
  const right = () => {
    console.log("gg");
  }
  const date = () => {
    const d = new Date()
    let day = d.getDate()
    let month1 = 1 + d.getMonth()
    let year = d.getFullYear()
    let hours = 1 + d.getUTCHours()
    let minutes = d.getUTCMinutes()
   return (
       <p>{day}/{month1}/{year} à {hours}:{minutes}</p>
   )
  }
  return (
    <div className={style.question}>
      <Question numQuestion={1} />
      <Player />
      <p>Q01</p>
      <button buttonName="réponse 1" className={clsx(style.button, {[style.buttonWrong]: !firstAnswer})} onClick={firstWrong}>Réponse 1</button>
      <button buttonName="réponse 1" className={clsx(style.button, {[style.buttonWrong]: !secondAnswer})} onClick={secondWrong}>Réponse 2</button>
      <button buttonName="réponse 1" className={style.button} onClick={right}>Réponse 3</button>
    </div>
  );
};

export default Question1;