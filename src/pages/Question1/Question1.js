import clsx from 'clsx';
import React, { useState } from 'react';
import Button from '../../components/button';
import Player from '../../components/player/Player';
import style from './question.module.css';

const Question1 = () => {
  const [firstAnswer, setFirstAnswer] = useState(true);
  const [secondAnswer, setSecondAnswer] = useState(true);
  
  const firstWrong = () =>{
    setFirstAnswer(false);
    // console.log("loupé");
    // alert("dommage");  
  }
  const secondWrong = () =>{
    setSecondAnswer(false);
    // console.log("loupé");
    // alert("dommage");  
  }
  const right = () => {
    console.log("gg");
  }
  return (
    <div className={style.question}>
      <Player />
      <p>Q01</p>
      <button buttonName="réponse 1" className={clsx(style.button, {[style.buttonWrong]: !firstAnswer})} onClick={firstWrong}>Réponse 1</button>
      <button buttonName="réponse 1" className={clsx(style.button, {[style.buttonWrong]: !secondAnswer})} onClick={secondWrong}>Réponse 2</button>
      <button buttonName="réponse 1" className={style.button} onClick={right}>Réponse 3</button>
    </div>
  );
};

export default Question1;