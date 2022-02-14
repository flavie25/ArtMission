import React, { useState } from 'react';
import Question from '../../components/question/question';
import style from './question.module.css';
import Header from '../../components/header/Header.js'

const Question1 = () => {
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
      <Header />
      <Question numQuestion={1} />
      {/* <Player /> */}
        
    </div>
  );
};

export default Question1;