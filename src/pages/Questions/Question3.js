import React from 'react';
import Question from '../../components/question/question';
import style from './questions.module.css'

const Question3 = () => {
  return (
    <div className={style.question3}>
        <Question numQuestion={3} numScreen={5}/>
    </div>
  );
};

export default Question3;