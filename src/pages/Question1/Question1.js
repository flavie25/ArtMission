import React from 'react';
import Button from '../../components/button';
import Player from '../../components/player/Player';
import style from './question.module.css';

const Question1 = () => {
  const wrong = () =>{
    console.log("loupé");
    alert("dommage");
  }
  const right = () => {
    console.log("gg");
  }
  return (
    <div className={style.question}>
      <Player />
      <p>Q01</p>
      <Button buttonName="réponse 1" onClick={wrong}/>
      <Button buttonName="réponse 2" onClick={wrong}/>
      <Button buttonName="réponse 3" onClick={right}/>
    </div>
  );
};

export default Question1;